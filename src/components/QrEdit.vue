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
      <div v-if="data.contentType === 'contactMe'">
        <oak-text
          id="adr"
          label="Address"
          :data="data.contactMe.adr"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="bday"
          label="BirthDate(yyyymmdd)"
          :data="data.contactMe.bday"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="email"
          label="Email"
          :data="data.contactMe.email"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="n"
          label="Name(Last, First)"
          :data="data.contactMe.n"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="nickname"
          label="Nick Name"
          :data="data.contactMe.nickname"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="note"
          label="Note"
          :data="data.contactMe.note"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="sound"
          label="Sound"
          :data="data.contactMe.sound"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="tel"
          label="Telephone"
          :data="data.contactMe.tel"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="telav"
          label="Tel-AV"
          :data="data.contactMe.telav"
          @change="handleChange('contactMe')"
        />
        <oak-text
          id="url"
          label="Website"
          :data="data.contactMe.url"
          @change="handleChange('contactMe')"
        />
      </div>
      <div v-if="data.contentType === 'contactV'">
        <oak-text
          id="addr"
          label="Address"
          :data="data.contactV.adr"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="addr"
          label="Address"
          :data="data.contactV.adr"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="anniversary"
          label="Anniversary(yyyymmdd)"
          :data="data.contactV.anniversary"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="bday"
          label="BirthDay(yyyymmdd)"
          :data="data.contactV.bday"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="begin"
          label="Begin"
          :data="data.contactV.begin"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="caladruri"
          label="Caladruri"
          :data="data.contactV.caladruri"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="caluri"
          label="Caluri"
          :data="data.contactV.caluri"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="categories"
          label="Categories"
          :data="data.contactV.categories"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="clientpidmap"
          label="ClientPidMap"
          :data="data.contactV.clientpidmap"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="email"
          label="Email"
          :data="data.contactV.email"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="fburl"
          label="FBURL"
          :data="data.contactV.fburl"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="fn"
          label="Formatted Name"
          :data="data.contactV.fn"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="gender"
          label="Gender"
          :data="data.contactV.gender"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="geo"
          label="GEO"
          :data="data.contactV.geo"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="impp"
          label="Instant Messenger Handle"
          :data="data.contactV.impp"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="key"
          label="Public Encryption Key"
          :data="data.contactV.key"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="kind"
          label="Kind"
          :data="data.contactV.impp"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="lang"
          label="Language"
          :data="data.contactV.lang"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="logo"
          label="Logo"
          :data="data.contactV.logo"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="member"
          label="Member"
          :data="data.contactV.member"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="n"
          label="Name"
          :data="data.contactV.n"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="nickname"
          label="Nickname"
          :data="data.contactV.nickname"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="note"
          label="Note"
          :data="data.contactV.note"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="org"
          label="Org"
          :data="data.contactV.org"
          @change="handleChange('contactV')"
        />
        <div class="file">
          <form enctype=""></form>
        </div>
        <oak-text
          id="prodid"
          label="Product Identifier"
          :data="data.contactV.prodid"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="related"
          label="Related"
          :data="data.contactV.related"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="rev"
          label="Rev"
          :data="data.contactV.rev"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="role"
          label="Role"
          :data="data.contactV.role"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="sound"
          label="Sound"
          :data="data.contactV.sound"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="source"
          label="Source"
          :data="data.contactV.source"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="tel"
          label="Telephone"
          :data="data.contactV.tel"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="title"
          label="Title"
          :data="data.contactV.title"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="tz"
          label="Time Zone"
          :data="data.contactV.tz"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="uid"
          label="UID"
          :data="data.contactV.uid"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="url"
          label="Website"
          :data="data.contactV.url"
          @change="handleChange('contactV')"
        />
        <oak-text
          id="xml"
          label="XML"
          :data="data.contactV.xml"
          @change="handleChange('contactV')"
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
        contactMe: {
          adr: '',
          bday: '',
          email: '',
          n: '',
          nickname: '',
          note: '',
          sound: '',
          tel: '',
          telav: '',
          url: '',
        },
        contactV: {
          adr: '',
          anniversary: '',
          bday: '',
          begin: '',
          caladruri: '',
          caluri: '',
          categories: '',
          clientpidmap: '',
          email: '',
          end: '',
          fburl: '',
          fn: '',
          gender: '',
          geo: '',
          impp: '',
          key: '',
          kind: '',
          optional: '',
          lang: '',
          logo: '',
          member: '',
          n: '',
          name: '',
          nickname: '',
          note: '',
          org: '',
          prodid: '',
          related: '',
          rev: '',
          role: '',
          sound: '',
          soource: '',
          tel: '',
          title: '',
          tz: '',
          uid: '',
          url: '',
          version: '',
          xml: '',
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
