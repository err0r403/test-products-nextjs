// import brace from 'brace';
// import 'brace/mode/javascript';
// import 'brace/mode/c_cpp';
// import 'brace/theme/twilight';
// import 'brace/theme/xcode';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const TextEditor = (props) => (
  <div>
    <AceEditor
        mode={props.mode}
        theme={props.theme}
        onChange={props.onChange}
        name={ props.name }
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        fontSize={14}
        height={ props.height }
        width='100%'
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        value={ props.value }
    />
  </div>
)

export default TextEditor