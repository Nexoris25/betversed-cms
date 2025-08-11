// src/admin/app.tsx
import './app.css';
import {
  setPluginConfig,
  defaultHtmlPreset,
  StrapiMediaLib,
  StrapiUploadAdapter,
} from '@_sh/strapi-plugin-ckeditor';
import type { Preset, PluginConfig } from '@_sh/strapi-plugin-ckeditor';

// Main toolbar (compact) + your 4 extra items
const PRIMARY_TOOLBAR_ITEMS: string[] = [
  'heading',
  'bold',
  'italic',
  'removeFormat',
  'link',
  'bulletedList',
  'numberedList',
  'alignment',
  'insertTable',     
  'htmlEmbed',       
  'strapiMediaLib',
  'blockQuote',
];

// Extras live in the overflow (“More”)
const EXTRA_TOOLBAR_ITEMS: string[] = [
  '|',
  'fontFamily',
  'fontSize',
  'underline',
  'undo',
  'redo',
  'findAndReplace',
  'highlight',
  'strikethrough',
  'superscript',
  'subscript',
  'specialCharacters',
  'horizontalLine',
  'code',
  'codeBlock',
  'outdent',
  'indent',
  'todoList',
  'imageUpload',
  'mediaEmbed',
];

export default {
  register() {
    const htmlPreset: Preset = {
      ...defaultHtmlPreset,
      description: 'Compact toolbar with overflow; pro features via “More”.',
      editorConfig: {
        ...defaultHtmlPreset.editorConfig,

        // Strapi integrations
        plugins: [
          ...(defaultHtmlPreset.editorConfig?.plugins || []),
          StrapiMediaLib,
          StrapiUploadAdapter,
        ],

        // Toolbar
        toolbar: {
          items: [...PRIMARY_TOOLBAR_ITEMS, ...EXTRA_TOOLBAR_ITEMS],
          shouldNotGroupWhenFull: false,
        },

        ui: { viewportOffset: { top: 0 } },

        // Fonts exposed in UI; default face is set via CSS (Kanit)
        fontFamily: {
          options: [
            'Kanit, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
            'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
            'Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif',
            'Default',
          ],
          supportAllValues: false,
        },
        fontSize: {
          options: [12, 14, 16, 18, 20, 24, 30, 32, 38],
          supportAllValues: false,
        },

        // Hide “Document colors” rows (prevents the duplicate “remove color” feel)
        fontColor: { columns: 5, documentColors: 0 },
        fontBackgroundColor: { columns: 5, documentColors: 0 },

        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
          ],
        },

        list: { properties: { styles: true, startIndex: true, reversed: true } },

        image: {
          toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'linkImage',
          ],
        },

        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties',
            'tableCellProperties',
          ],
        },

        mediaEmbed: { previewsInData: true },
        htmlEmbed: {
          showPreviews: true,
          sanitizeHtml: (inputHtml: string) => ({ html: inputHtml, hasChanged: false }),
        },
        htmlSupport: {
          allow: [{ name: /.*/, attributes: true, classes: true, styles: true }],
        },
      },
    };

    const cfg: PluginConfig = { presets: [htmlPreset] };
    setPluginConfig(cfg);
  },

  bootstrap() {},
};
