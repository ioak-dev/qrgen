<template>
  <oak-dialog class="qr-edit" :visible="visible" @click="$emit('toggle')">
    <div slot="dialog-body">
      <oak-select
        id="contentType"
        theme="primary"
        variant="outline"
        label="output type"
        :data="data.contentType"
        :objects="supported.contentTypes"
        @change="handleChange()"
      />
      <div v-if="data.contentType === 'url'">
        <oak-text
          id="text"
          label="URL"
          :data="data.url.text"
          placeholder="http://"
          @change="handleChange('url')"
        />
      </div>
      <div v-if="data.contentType === 'wifi'">
        <oak-text
          id="ssid"
          label="WiFi SSID"
          :data="data.wifi.ssid"
          @change="handleChange('wifi')"
        />
        <oak-text
          id="pwd"
          label="WiFi Password"
          type="password"
          :data="data.wifi.pwd"
          @change="handleChange('wifi')"
        />
      </div>
      <div v-if="data.contentType === 'plaintext'">
        <oak-text
          id="text"
          label="Free text"
          :data="data.plaintext.text"
          multiline
          @change="handleChange('plaintext')"
        />
      </div>
      <oak-select
        id="outputFormat"
        label="output type"
        :data="data.outputFormat"
        :elements="supported.outputFormats"
        @change="handleChange()"
      />
      <div class="typography-5">
        If you would like to save the settings in your profile, provide a name
        to identify your QR code
      </div>
      <oak-text
        id="saveAsName"
        label="Save as"
        :data="data.saveAsName"
        @change="handleChange()"
      />
      <img v-if="qr" :src="qr" />
    </div>
    <div slot="dialog-footer">
      <oak-button
        label="download"
        theme="primary"
        variant="animate in"
        @click="download"
      />
    </div>
  </oak-dialog>
</template>

<script>
import QRCode from 'qrcode';
import OakButton from '../oakui/OakButton.vue';
import OakText from '../oakui/OakText.vue';
import OakSelect from '../oakui/OakSelect.vue';
import OakDialog from '../oakui/OakDialog.vue';

export default {
  name: 'QrEdit',
  components: {
    OakButton,
    OakText,
    OakSelect,
    OakDialog,
  },
  props: {
    visible: Boolean,
  },
  data() {
    return {
      qr: '',
      data: {
        contentType: '',
        outputFormat: 'svg',
        saveAsName: '',
        wifi: {
          ssid: '',
          pwd: '',
        },
        plaintext: {
          text:
            'MECARD:N:Arun Kumar Selvaraj;EMAIL:arunkumar.selvaraj@dev.ioak.org;TEL:+918884000622;URL:www.ioak.org;;',
        },
        url: {
          text: '',
        },
      },
      supported: {
        outputFormats: ['svg', 'png'],
        contentTypes: [
          { key: 'url', value: 'URL' },
          { key: 'contactV', value: 'Contact (vCard)' },
          { key: 'contactMe', value: 'Contact (MeCard)' },
          { key: 'wifi', value: 'WIFI' },
          { key: 'plaintext', value: 'Text' },
        ],
      },
      isEditDialogOpen: false,
    };
  },
  methods: {
    generate(text, type, options) {
      if (type === 'svg') {
        QRCode.toString(text, options, (err, url) => {
          if (url) {
            this.qr = `data:image/svg+xml;base64,${window.btoa(url)}`;
          } else {
            this.qr = undefined;
          }
        });
      } else if (type === 'png') {
        QRCode.toDataURL(text, options, (err, url) => {
          this.qr = url;
        });
      }
    },
    submit() {
      let qrText = '';
      // QRCode.toString("BEGIN:VCARD\nVERSION:2.1\nN:Arun\nEMAIL:arun@ioak.com\nEND:VCARD", {
      // QRCode.toString("MECARD:N:Arun;EMAIL:arun@ioak.org;TEL:+918884000622;URL:www.ioak.org;;", {
      // QRCode.toString("WIFI:T:WPA;S:ssid;P:password;;", {
      switch (this.data.contentType) {
        case 'url':
          qrText = this.data.url.text;
          break;
        case 'wifi':
          qrText = this.formatWifiContent(this.data.wifi);
          break;
        case 'plaintext':
          qrText = this.data.plaintext.text;
          break;
        default:
          break;
      }
      this.generate(qrText, this.data.outputFormat, {
        text: 'http://jindo.dev.naver.com/collie',
        width: 500,
        height: 500,
        type: this.type,
        // scale: 1,
        // errorCorrectionLevel: 'H',
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
    },
    formatWifiContent(data) {
      return `WIFI:T:WPA;S:${data.ssid};P:${data.pwd};;`;
    },
    handleChange(baseObject) {
      if (baseObject) {
        this.data[baseObject][event.target.name] = event.target.value;
      } else {
        this.data[event.target.name] = event.target.value;
      }
      this.submit();
    },
    toggleEditDialog() {
      this.isEditDialogOpen = !this.isEditDialogOpen;
    },
    download() {
      const link = document.createElement('a');
      link.download = `qr-code.${this.data.outputFormat}`;
      link.href = this.qr;
      link.click();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.qr-edit {
  // width: 80vw;
  margin: auto;
  // margin-top: 50px;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto;
  input,
  select {
    padding: 10px;
    outline: none;
  }

  img {
    width: 100px;
  }
}
</style>
