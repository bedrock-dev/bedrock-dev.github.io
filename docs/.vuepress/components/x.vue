<script>
export default {
    data() {
        return {
            all_releases: [
                { tag: "0.41.0-1.20.30.02", url: "https://github.com/bedrock-dev/trapdoor-ll/releases/download/0.41.0-1.20.30.02/trapdoor-0.41.0-1.20.30.02-10b9dda.zip" },
                { tag: "0.40.0-1.20.11.01", url: "https://github.com/bedrock-dev/trapdoor-ll/releases/download/0.40.0-1.20.11.01/trapdoor-0.39.0-1.20.0.01-18ae2e0.zip" },
                { tag: "0.39.0-1.20.0.01", url: "https://github.com/bedrock-dev/trapdoor-ll/releases/download/0.39.0-1.20.0.01/trapdoor-0.39.0-1.20.0.01-8e28500.zip" },
                { tag: "0.38.0-1.20.0.01", url: "" },
                { tag: "0.38.0-1.19.81.01", url: "" },
                { tag: "0.36.0-1.19.72.01", url: "" },
                { tag: "0.35.0-1.19.63.01", url: "" },
                { tag: "0.30.0-1.19.61.01", url: "" },
                { tag: "0.26.0-1.19.61.01", url: "" },
                { tag: "0.25.0-1.19.50.2", url: "" },
                { tag: "0.22.0-1.19.50.2", url: "" },
                { tag: "0.21.0-1.19.50.2", url: "" },
                { tag: "0.20.0-1.19.40.02", url: "" },
                { tag: "0.19.5-1.19.30.04", url: "" },
                { tag: "0.19.1-1.19.22.01", url: "" },
                { tag: "0.18.0-1.19.22.01", url: "" },
                { tag: "0.18.0-1.19.20.02", url: "" },
                { tag: "0.17.5-1.19.20.02", url: "" },
                { tag: "0.17-1.19.20.02", url: "" },
                { tag: "0.16-1.19.10.03", url: "" },
                { tag: "0.15-1.19.10.03", url: "" },
                { tag: "0.14-1.19.10.03", url: "" },
                { tag: "0.13-1.19.10.03", url: "" },
                { tag: "0.13-1.19.1.01", url: "" },
                { tag: "0.12-1.19.1.01", url: "" },
            ],
            all_bds_versions: [],
            select_releases: [],
            select_bds_version: "",
            main_repo: "https://github.com/bedrock-dev/trapdoor-ll/"
        }
    },
    methods: {
        onChange() {
            if (this.select_bds_version.length == 0) {
                this.select_releases = this.all_releases;
            } else {
                this.select_releases = []
                for (var i = 0; i < this.all_releases.length; i++) {
                    if (this.all_releases[i].tag.split('-')[1] == this.select_bds_version) {
                        this.select_releases.push(this.all_releases[i]);
                    }
                }
            }
        }
    }

    , mounted() {
        //预处理
        for (var i = 0; i < this.all_releases.length; i++) {
            if (this.all_releases[i].url.length == 0) { //不内置链接,自动生成
                this.all_releases[i].url = this.main_repo + "/releases/tag/" + this.all_releases[i].tag;
                this.all_releases[i].mirror_url = '#';
            } else {
                this.all_releases[i].mirror_url = "https://ghproxy.com/" + this.all_releases[i].url;
            }

            let version = this.all_releases[i].tag.split('-')[0];
            if (version <= "0.18.0") {
                this.all_releases[i].resource_pack_url = ['https://github.com/OEOTYAN/Trapdoor-CUI/releases/download/v0.4/WorldEdit-BE-CUI-v0.4.mcpack']
            } else if (version <= "0.25.0") {
                this.all_releases[i].resource_pack_url = ["https://github.com/OEOTYAN/Trapdoor-CUI/releases/download/v5.0/Trapdoor-CUIv5.0.mcpack",
                    "https://github.com/OEOTYAN/LiteLoaderBDS-CUI/releases/download/ll.1.0/LiteLoaderBDS-CUIv1.0.mcpack"];
            } else {
                this.all_releases[i].resource_pack_url = ["https://github.com/OEOTYAN/LiteLoaderBDS-CUI/releases/download/v1.1/LiteLoaderBDS-CUIv1.1.mcpack"];
            }
        }


        this.select_releases = Array.from(this.all_releases);
        let tmp = new Set()
        tmp.add('')
        this.all_releases.forEach(e => {
            tmp.add(e.tag.split('-')[1])
        });
        this.all_bds_versions = Array.from(tmp)
    }

}
</script>

<template>
    <div class="main">

        <h1>下载Trapdoor</h1>

        <ul>
            <li>“下载”展示的是github的直链，直接点击下载即可，国内因为网络原因无法下载的可以尝试镜像，镜像不保证可用</li>
            <li>“去github下载”表示苯页面并未提供直链，点击该链接可以前往github的release页面下载</li>
            <li>资源包是该版本配套的资源包，同样地，如法无法下载可尝试镜像，另外，部分版本展示了两个下载链接则表示两个需要同时下载和安装</li>
            <li>1.18及以下的版本请前往<a href="https://github.com/bedrock-dev/TrapDoor/releases">这里</a>下载</li>

        </ul>

        <div style="align-items: center;">
            <form action="#">
                <label for="lang">选择版本</label>
                <select v-model="select_bds_version" @change="onChange">
                    <option v-for="v in  all_bds_versions" :value="v">{{ v }}</option>
                </select>
            </form>
        </div>


        <div v-for="  v   in   select_releases  " :key="v.tag">
            <div class="row">
                <div style="display: inline;">
                    <span class="version">Trapdoor {{ v.tag }}</span>
                </div>

                <div style="display: inline; float: right;">

                    <span v-if="v.mirror_url != '#'">
                        <a :href="v.url">下载</a>
                        <a :href="v.mirror_url">(镜像)</a>
                    </span>
                    <span v-else>
                        <a :href="v.url">去github下载</a>
                    </span>


                    &nbsp;
                    &nbsp;

                    <span v-for="  x in v.resource_pack_url">
                        <a :href="x">资源包</a>
                        <a :href="'https://ghproxy.com/' + x">(镜像)</a>
                        &nbsp;
                    </span>
                </div>
            </div>
        </div>



    </div>
</template>
<style>
.version {
    font-weight: bolder;
}

.row {
    padding: 6px;
    border-bottom: 1px solid #eee
}
</style>
