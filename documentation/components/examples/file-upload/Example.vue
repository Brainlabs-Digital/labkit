<template>
    <div>
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
    </div>
</template>

<script>
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
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
