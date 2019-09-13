<template>
    <lk-content>
        <h1>File upload</h1>
        <p>The file upload component (<code>lk-file-upload</code>) allows the user to upload files by either dragging and dropping the file on the component or by clicking the component and then picking a file. It is a wrapper around <a href="https://www.dropzonejs.com/">Dropzone.js</a>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="exampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="exampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Automatic image resize</h3>
        <p>If the prop <code>image-resize-width-pixels</code> is set to a value then images will automatically be resized before being uploaded. If an image is smaller than the size specified then no resize will take place.</p>
        <h3>Text</h3>
        <p>The text which is shown ('Drag And Drop Here&hellip;') can be replaced by using the default slot.</p>
    </lk-content>
</template>

<script>
import Code from '@/labkit/documentation/components/Code';
import Example from '@/labkit/documentation/components/examples/file-upload/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            exampleScript: `
// Component <script> content
export default {
    data() {
        return {
            filesInFlight: 0,
            uploadedFileIds: [],
        };
    },
    methods: {
        addUploadedFileId(res) {
            this.uploadedFileIds.push(res.id);
        },
        setFilesInFlight(filesInFlight) {
            this.filesInFlight = filesInFlight;
        },
    },
};
            `,
            exampleTemplate: `
<!-- Component <template> content -->
<lk-content content-font-size-primary>
    <p>{{filesInFlight}} file(s) are currently being uploaded.</p>
    <lk-divider margin-bottom="content" />
    <p v-if="uploadedFileIds.length === 0">0 files have been uploaded.</p>
    <template v-else>
        <p>The following files have been uploaded:</p>
        <ul>
            <li
                v-for="fileId in uploadedFileIds"
                :key="fileId"
            >{{fileId}}</li>
        </ul>
    </template>
</lk-content>
<lk-divider />
<lk-file-upload
    :accepted-file-types="['image/jpg', 'image/jpeg', 'image/*']"
    :max-file-size-mb="2"
    upload-url="/api/v1/files"
    @file:uploaded="addUploadedFileId"
    @files-in-flight:updated="setFilesInFlight"
/>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
