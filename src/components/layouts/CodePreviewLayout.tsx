import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { RiJavascriptFill } from 'react-icons/ri';

type CodePreviewLayoutProps = { 
    fileName: string,
    codeString: string, 
    description?: string,
    style?: React.CSSProperties 
}

function CodePreviewLayout({ 
    fileName, 
    codeString, 
    description,
    style = {} 
}: CodePreviewLayoutProps) {
    return (
        <div className="flex flex-col divide-y divide-gray-800" style={style}>
            <header className="px-6 py-3" style={{ background: 'rgb(1, 22, 39)' }}>
                <div className="flex flex-col gap-1">
                    <div className="text-gray-300 flex items-center gap-1">
                        <RiJavascriptFill color="yellow" />
                        <span className="font-mono text-xs font-bold">{ fileName }</span>
                    </div>
                    {description && <div className="text-xs text-gray-400">{ description }</div>}
                </div>
            </header>
            <SyntaxHighlighter 
                language="javascript" 
                style={nightOwl} 
                customStyle={{ 
                    fontSize: 13,
                    flex: 1,
                    paddingTop: 18, 
                    paddingLeft: 24 
                }}
                wrapLines
                showLineNumbers
                lineNumberStyle={{
                    color: 'rgba(255, 255, 255, 0.4)'
                }}
            >
                {codeString}
            </SyntaxHighlighter>            
        </div>
    )
}

export default CodePreviewLayout;
