export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'Georgiy-huma/huma-next',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: "Blogs",
      identifier_field: "slug",
      label: "Blogs",
      editor: { preview: false },
      label_singular: "Blog",
      folder: "content/thoughtpiece",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Short Title",
          name: "title",
          widget: "string",
          required: true,
        },
        {
          label: "URL (Slug)",
          name: "slug",
          widget: "string",
          required: true,
        },
        {
          label: "Meta description",
          name: "metaDescr",
          widget: "string",
          required: true,
        },
        {
          label: "Header",
          name: "header",
          widget: "string",
          required: true,
        },
        {
          label: "Sub-header",
          name: "subHeader",
          widget: "string",
          required: true,
        },
        {
          label: "Author",
          name: "author",
          widget: "string",
          required: true,
        },
        {
          label: "Minutes to read",
          name: "minToRead",
          widget: "string",
          required: true,
        },
        {
          label: "Publish date",
          name: "publishDate",
          widget: "string",
          required: true,
        },
        {
          label: 'Post content',
          name: 'postContent',
          widget: 'markdown',
        },
      ],
    },
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'heroTitle',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'heroDescription',
              widget: 'markdown',
            }
          ]
        }
      ]
    }
  ]
}
