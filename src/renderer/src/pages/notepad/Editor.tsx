import '@mdxeditor/editor/style.css'
import {
  AdmonitionDirectiveDescriptor,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  KitchenSinkToolbar,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  sandpackPlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from '@mdxeditor/editor'
import useEditor from './Editor.controller'

export default function Editor() {
  const { activeNote, virtuosoSampleSandpackConfig, handleChangeNoteContent } = useEditor()

  return (
    <div className="h-full text-white">
      <MDXEditor
        key={activeNote?.id}
        onChange={(val) => handleChangeNoteContent(val, activeNote)}
        markdown={activeNote?.content || ''}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <KitchenSinkToolbar />
              </>
            ),
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          frontmatterPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: 'JavaScript',
              css: 'CSS',
              txt: 'text',
              tsx: 'TypeScript',
              c: 'C Sharp',
            },
          }),
          diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
        ]}
        autoFocus
        className="text-white backdrop-blur-md"
        contentEditableClassName="text-white outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-primary prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-headings:text-dark prose-strong:text-dark prose-italic:text-dark
prose-blockquote:my-4 prose-blockquote:text-dark prose-ol-my-2 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500
prose-code:before:content-['] prose-code:after:content-[' ']"
      />
    </div>
  )
}
