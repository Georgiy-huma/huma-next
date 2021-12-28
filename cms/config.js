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
          label: "Title",
          name: "title",
          widget: "string",
          required: true,
        },
        {
          label: "Slug",
          name: "slug",
          widget: "string",
          required: true,
        },
        {
          label: "Builder",
          name: "builder",
          widget: "list",
          types: [
            {
              label: "Header Image",
              name: "header",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: true,
                },
                {
                  label: "Background Image",
                  name: "photo",
                  widget: "image",
                  required: true,
                  media_library: { config: { multiple: false } },
                },
              ],
            },
            {
              label: "CTA Section",
              name: "cta",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: true,
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Content",
              name: "content",
              widget: "object",
              fields: [
                {
                  name: "Content",
                  widget: "markdown",
                  required: false,
                },
              ],
            },
          ],
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
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            }
          ]
        }
      ]
    }
  ]
}
