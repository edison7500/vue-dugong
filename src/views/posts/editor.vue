<template>
  <section class="editor">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8-desktop">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="field has-addons">
              <p class="control">
                <b-button
                  :class="{ 'is-active': isActive.bold() }"
                  @click="commands.bold"
                >
                  <font-awesome-icon :icon="['fas', 'bold']"/>
                </b-button>
              </p>
              <p class="control">
                <b-button
                  :class="{ 'is-active': isActive.italic() }"
                  @click="commands.italic"
                >
                  <font-awesome-icon :icon="['fas', 'italic']" />
                </b-button>
              </p>
              <p class="control">
                <b-button
                  :class="{ 'is-active': isActive.strike() }"
                  @click="commands.strike"
                >
                  <font-awesome-icon :icon="['fas', 'strikethrough']" />
                </b-button>
              </p>
            </div>
          </editor-menu-bar>

          <editor-content :editor="editor"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import { Bold, Italic, Link, HardBreak, Heading, Strike } from 'tiptap-extensions';


export default {
  name: 'post-editor',
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      content: `
            <h1>Yay Headlines!</h1>
            <p>All these <strong>cool tags</strong> are working now.</p>
            `,
      extensions: [
        new Bold(),
        new Italic(),
        new Link(),
        new HardBreak(),
        new Heading(),
        new Strike(),
      ],
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style scoped>
.editor {
  margin-top: 60px;
}
</style>
