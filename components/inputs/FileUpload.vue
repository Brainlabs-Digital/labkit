<template>
    <lk-wrapper v-bind="wrapperProps">
        <div
            class="dropzone"
            ref="dropzone"
        >
            <div
                class="dz-message"
                data-dz-message
            >
                <h3><slot>Drag And Drop Here (or click to select) To Upload A File</slot></h3>
            </div>
        </div>
        <p
            v-if="hasAcceptedFileTypes === true || maxFileSizeMb !== undefined"
            class="restrictions"
        >
            <span v-if="hasAcceptedFileTypes === true">Accepted filetypes: {{prettyAcceptedFiles}}.</span>
            <span v-if="maxFileSizeMb !== undefined">Max filesize: {{maxFileSizeMb}}MB.</span>
        </p>
        <lk-padder
            v-if="hasErrors === true"
            padding-top="compact"
        >
            <lk-alert
                v-for="(error, index) in errors"
                action-items-inline
                danger
                :key="error.file"
                padding-bottom="none"
                padding-top="content"
            >
                <template slot="content">
                    <p v-if="error.type === 'FileSizeError'">
                        Unable to upload <strong><em>{{error.file}}</em></strong> as the filesize is too big. Files must less than {{maxFileSizeMb}}MB.
                    </p>
                    <p v-else-if="error.type === 'FileTypeError'">
                        Unable to upload <strong><em>{{error.file}}</em></strong> as it is not an accepted filetype. Files must be one of the following: {{prettyAcceptedFiles}}.
                    </p>
                    <p v-else>
                        Unable to upload <strong><em>{{error.file}}</em></strong> due to an unexpected error. Please try again in a few moments.
                    </p>
                </template>
                <template slot="actionItems">
                    <lk-button
                        circle
                        mini
                        danger
                        outline
                        @click.native="removeError(index)"
                    ><lk-icon icon="times" /></lk-button>
                </template>
            </lk-alert>
        </lk-padder>
    </lk-wrapper>
</template>

<script>
import 'dropzone/dist/dropzone.css';
import * as Dropzone from 'dropzone';

export default {
    beforeDestroy() {
        /*
            Because Dropzone creates elements outside of the component, we must
            do a little bit of cleanup when we destroy the component.
        */
        this.dropzone.off();
        this.dropzone.destroy();
        this.enableDragAndDropOnPage();
    },
    computed: {
        acceptedFiles() {
            return this.acceptedFileTypes.join(',');
        },
        hasAcceptedFileTypes() {
            return this.acceptedFileTypes.length > 1;
        },
        hasErrors() {
            return this.errors.length > 0;
        },
        hasMaxFileSize() {
            return this.maxFileSizeMb !== undefined;
        },
        prettyAcceptedFiles() {
            return this.acceptedFileTypes.join(', ');
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
            };
        },
    },
    data() {
        return {
            dropzone: undefined,
            errors: [],
            filesInFlight: 0,
        };
    },
    methods: {
        clearErrors() {
            this.errors = [];
        },
        enableDragAndDropOnPage() {
            window.removeEventListener('dragover', this.preventDefault, true);
            window.removeEventListener('drop', this.preventDefault, true);
        },
        initializeDropzone() {
            this.dropzone = new Dropzone(this.$refs.dropzone, {
                accept: (file, done) => {
                    this.filesInFlight += 1;
                    done();
                },
                acceptedFiles: this.acceptedFiles,
                maxFilesize: this.maxFileSizeMb,
                resizeWidth: this.imageResizeWidthPixels,
                thumbnailMethod: 'contain',
                url: this.uploadUrl,
            });
            this.dropzone.on('error', (file, err) => {
                /*
                    TODO:
                    Try to nail down whether `err` is a string or object.
                */
                if (
                    (typeof err === 'string' &&
                        err === `You can't upload files of this type.`) ||
                    (typeof err === 'object' && err.type === 'FileTypeError')
                ) {
                    this.errors.unshift({
                        type: 'FileTypeError',
                        file: file.name,
                    });
                } else if (
                    (typeof err === 'string' &&
                        err.startsWith('File is too big')) ||
                    (typeof err === 'object' && err.type === 'FileSizeError')
                ) {
                    this.errors.unshift({
                        type: 'FileSizeError',
                        file: file.name,
                    });
                } else {
                    this.errors.unshift({
                        type: 'UnexpectedError',
                        file: file.name,
                    });
                    this.filesInFlight -= 1;
                }
                this.dropzone.removeFile(file);
            });
            this.dropzone.on('success', (file, res) => {
                this.filesInFlight -= 1;
                this.dropzone.removeFile(file);
                this.$emit('file:uploaded', res);
            });
        },
        removeError(index) {
            this.errors.splice(index, 1);
        },
        preventDefault(evt) {
            evt.preventDefault();
        },
        preventDragAndDropOnPage() {
            /*
                Because it is a pain to lose progress on a form when accidentally
                dropping a file in the browser window when attempting to drop it into
                a drag and drop upload element, we disable the global drag and drop
                functionality.
            */
            window.addEventListener('dragover', this.preventDefault, true);
            window.addEventListener('drop', this.preventDefault, true);
        },
    },
    mounted() {
        this.initializeDropzone();
        this.preventDragAndDropOnPage();
    },
    props: {
        acceptedFileTypes: {
            default: () => [],
            type: Array,
        },
        imageResizeWidthPixels: {
            default: null,
            type: Number,
        },
        maxFileSizeMb: {
            type: Number,
        },
        uploadUrl: {
            required: true,
            type: String,
        },
    },
    watch: {
        filesInFlight() {
            /*
                We want to be able to communicate how many files are currently
                being uploaded with a parent component as they may want to behave
                differently if there are files being uploaded, so we emit an event with
                the current number of files in flight.
            */
            this.$emit('files-in-flight:updated', this.filesInFlight);
        },
    },
};
</script>

<style scoped lang="scss">
@import '../../styles/variables';

/*
    *** DANGER ZONE ***
    Unlike other components, this component only uses scoped CSS, not CSS modules.

    This is intentional to allow for the C(ascading) in CSS to be functional so that
    the Dropzone styling to apply to the component.
*/

.dropzone {
    border: border-width(thick) dashed color(link, semi-muted);
    border-radius: border-radius(panel);
    color: color(link);
    min-height: 0;
    text-align: center;
    transition: background $transition-duration,
        border-color $transition-duration, color $transition-duration;
    transition-timing-function: $transition-timing-function;
    h3 {
        font-size: font-size(sub-heading);
        font-weight: bold;
    }
    &.dz-drag-hover,
    &.dz-clickable:hover {
        background: color(link, muted);
        border-color: color(link, dark);
        color: color(link, dark);
        .dz-message {
            opacity: 1;
        }
    }
}

.restrictions {
    color: color(text, muted);
    font-size: font-size(caption);
    padding: spacing-vertical(compact) 0 0 0;
}
</style>
