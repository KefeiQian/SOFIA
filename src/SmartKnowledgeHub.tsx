import React from 'react';

// --- SVG Icon Components for Details ---
const DatabaseIcon = () => <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const CodeIcon = () => <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const DocumentIcon = () => <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
const SearchIcon = () => <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const BrainIcon = () => <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
const ProcessIcon = () => <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const VectorIcon = () => <path d="M12 2l3.09 6.26L22 9l-5.91 1.74L12 22l-4.09-11.26L2 9l6.91-1.74L12 2z" />;
const GitIcon = () => <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const MCPIcon = () => <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
const ChatIcon = () => <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />;

// --- Component for individual nodes in the diagram ---
const Node = ({ id, x, y, width, height, title, details, color, titleColor, detailColor }: {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  details: Array<{ icon: React.ReactElement; text: string }>;
  color: string;
  titleColor: string;
  detailColor: string;
}) => {
    // Special layout for data sources - 3 items per row
    const isDataSources = id === 'dataSources';
    
    let detailItems;
    if (isDataSources) {
        const rows = [];
        for (let i = 0; i < details.length; i += 3) {
            const rowItems = details.slice(i, i + 3);
            rows.push(
                <div key={i} className="grid grid-cols-3 gap-4">
                    {rowItems.map(item => (
                        <div key={item.text} className="flex items-center justify-center text-center space-x-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">{item.icon}</svg>
                            <span className="text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            );
        }
        detailItems = rows;
    } else {
        detailItems = details.map(item => (
            <div key={item.text} className="flex items-center justify-center text-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">{item.icon}</svg>
                <span>{item.text}</span>
            </div>
        ));
    }
    
    return (
        <g transform={`translate(${x}, ${y})`}>
            <foreignObject width={width} height={height}>
                <div className={`w-full h-full px-5 py-5 rounded-2xl bg-gradient-to-br ${color} border-2 border-gray-600/50 shadow-2xl flex flex-col justify-center`}>
                    <h3 className={`text-center font-bold text-lg ${titleColor} mb-3 whitespace-pre-line`}>{title}</h3>
                    <div className={`${isDataSources ? 'space-y-3' : 'space-y-2'} text-sm ${detailColor} opacity-95`}>
                        {detailItems}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

// --- Main Component ---
export default function SmartKnowledgeHub() {
  const nodes = {
    // First row - three blocks (consistent layout)
    vscodeIntegration: { 
      id: 'vscodeIntegration', 
      x: 80, y: 30, width: 360, height: 150, 
      title: 'VSCode & Copilot\nIntegration', 
      details: [
        { icon: <CodeIcon/>, text: 'VSCode Extension' },
        { icon: <BrainIcon/>, text: 'GitHub Copilot Agent Mode' },
        { icon: <ChatIcon/>, text: 'Interactive Assistant' },
      ], 
      color: 'from-teal-800 to-teal-900', 
      titleColor: 'text-teal-200', 
      detailColor: 'text-teal-300' 
    },

    endUsers: { 
      id: 'endUsers', 
      x: 460, y: 30, width: 360, height: 150, 
      title: 'End Users', 
      details: [
        { icon: <ProcessIcon/>, text: 'Sovereign Cloud Buildout Team' },
        { icon: <DocumentIcon/>, text: 'Service Owners' },
        { icon: <BrainIcon/>, text: 'Other AI Services' },
      ], 
      color: 'from-green-800 to-green-900', 
      titleColor: 'text-green-200', 
      detailColor: 'text-green-300' 
    },
    
    sofiaIntegrations: { 
      id: 'sofiaIntegrations', 
      x: 840, y: 30, width: 360, height: 150, 
      title: 'SOFIA Module\nIntegrations', 
      details: [
        { icon: <MCPIcon/>, text: 'AI Agent Access' },
        { icon: <ProcessIcon/>, text: 'API Integration' },
        { icon: <SearchIcon/>, text: 'Real-Time Queries' },
      ], 
      color: 'from-gray-700 to-gray-800', 
      titleColor: 'text-gray-200', 
      detailColor: 'text-gray-300' 
    },

    // Second row - Presentation Module
    presentationModule: { 
      id: 'presentationModule', 
      x: 460, y: 220, width: 360, height: 120, 
      title: 'Presentation Module', 
      details: [
        { icon: <ChatIcon/>, text: 'Interactive Knowledge Wiki' },
        { icon: <SearchIcon/>, text: 'Advanced Search Interface' },
        { icon: <BrainIcon/>, text: 'Conversational AI Assistant' },
      ], 
      color: 'from-rose-800 to-rose-900', 
      titleColor: 'text-rose-200', 
      detailColor: 'text-rose-300' 
    },

    // Third row - MCP Wrapper (wider)
    mcpWrapper: {
      id: 'mcpWrapper',
      x: 100, y: 380, width: 1080, height: 560,
      title: '', details: [], color: '', titleColor: '', detailColor: ''
    },

    // Data Sources inside MCP (wider)
    dataSources: { 
      id: 'dataSources', 
      x: 140, y: 430, width: 1000, height: 140, 
      title: 'Data Sources', 
      details: [
        { icon: <DocumentIcon/>, text: 'Past Incidents & TSGs' },
        { icon: <DocumentIcon/>, text: 'Emails & Communications' },
        { icon: <CodeIcon/>, text: 'Code Repositories' },
        { icon: <DocumentIcon/>, text: 'Wikis & Documentation' },
        { icon: <ProcessIcon/>, text: 'Scripts & Runbooks' },
      ], 
      color: 'from-blue-800 to-blue-900', 
      titleColor: 'text-blue-200', 
      detailColor: 'text-blue-300' 
    },

    // Processing Pipeline Row inside MCP (centered blocks)
    ingestionLayer: { 
      id: 'ingestionLayer', 
      x: 140, y: 610, width: 240, height: 280, 
      title: 'Data Ingestion\n& Processing', 
      details: [
        { icon: <GitIcon/>, text: 'Repository Cloning & Analysis' },
        { icon: <CodeIcon/>, text: 'AST Generation & Code Parsing' },
        { icon: <ProcessIcon/>, text: 'Dependency Analysis' },
        { icon: <BrainIcon/>, text: 'Content Memorization & Parsing' },
        { icon: <DocumentIcon/>, text: 'Documentation Extraction' },
      ], 
      color: 'from-purple-800 to-purple-900', 
      titleColor: 'text-purple-200', 
      detailColor: 'text-purple-300' 
    },
    
    aiEngine: { 
      id: 'aiEngine', 
      x: 400, y: 610, width: 240, height: 280, 
      title: 'AI Analysis\nEngine', 
      details: [
        { icon: <BrainIcon/>, text: 'Language Model Processing' },
        { icon: <VectorIcon/>, text: 'Code & Content Embeddings' },
        { icon: <ProcessIcon/>, text: 'Semantic Analysis' },
        { icon: <DocumentIcon/>, text: 'Auto-Summarization' },
        { icon: <SearchIcon/>, text: 'Pattern Recognition' },
      ], 
      color: 'from-orange-800 to-orange-900', 
      titleColor: 'text-orange-200', 
      detailColor: 'text-orange-300' 
    },
    
    vectorDatabase: { 
      id: 'vectorDatabase', 
      x: 660, y: 610, width: 240, height: 280, 
      title: 'Vector Database\n& Knowledge Store', 
      details: [
        { icon: <VectorIcon/>, text: 'Vectorized Knowledge Repository' },
        { icon: <DatabaseIcon/>, text: 'Semantic Search Capabilities' },
        { icon: <SearchIcon/>, text: 'Similarity-Based Retrieval' },
        { icon: <ProcessIcon/>, text: 'Contextual Relationships' },
        { icon: <BrainIcon/>, text: 'Continuous Learning' },
      ], 
      color: 'from-green-800 to-green-900', 
      titleColor: 'text-green-200', 
      detailColor: 'text-green-300' 
    },
    
    ragSystem: { 
      id: 'ragSystem', 
      x: 920, y: 610, width: 220, height: 280, 
      title: 'RAG Search\n& Retrieval', 
      details: [
        { icon: <SearchIcon/>, text: 'Intelligent Query Processing' },
        { icon: <BrainIcon/>, text: 'Context-Aware Retrieval' },
        { icon: <ProcessIcon/>, text: 'Answer Generation' },
        { icon: <DocumentIcon/>, text: 'Source Attribution' },
        { icon: <VectorIcon/>, text: 'Multi-Modal Search' },
      ], 
      color: 'from-indigo-800 to-indigo-900', 
      titleColor: 'text-indigo-200', 
      detailColor: 'text-indigo-300' 
    },
  };

  // Connection lines
  const lines = [
    // End Users to Presentation Module (straight line center-to-center)
    { x1: nodes.endUsers.x + nodes.endUsers.width/2, y1: nodes.endUsers.y + nodes.endUsers.height, x2: nodes.endUsers.x + nodes.endUsers.width/2, y2: nodes.presentationModule.y },
    
    // Processing Pipeline internal horizontal connections (inside MCP)
    { x1: nodes.ingestionLayer.x + nodes.ingestionLayer.width, y1: nodes.ingestionLayer.y + nodes.ingestionLayer.height/2, x2: nodes.aiEngine.x, y2: nodes.aiEngine.y + nodes.aiEngine.height/2 },
    { x1: nodes.aiEngine.x + nodes.aiEngine.width, y1: nodes.aiEngine.y + nodes.aiEngine.height/2, x2: nodes.vectorDatabase.x, y2: nodes.vectorDatabase.y + nodes.vectorDatabase.height/2 },
    { x1: nodes.vectorDatabase.x + nodes.vectorDatabase.width, y1: nodes.vectorDatabase.y + nodes.vectorDatabase.height/2, x2: nodes.ragSystem.x, y2: nodes.ragSystem.y + nodes.ragSystem.height/2 },
    
    // Presentation Module to MCP (straight line center-to-center)
    { x1: nodes.presentationModule.x + nodes.presentationModule.width/2, y1: nodes.presentationModule.y + nodes.presentationModule.height, x2: nodes.presentationModule.x + nodes.presentationModule.width/2, y2: nodes.mcpWrapper.y },
    
    // VSCode Integration to MCP
    { x1: nodes.vscodeIntegration.x + nodes.vscodeIntegration.width/2, y1: nodes.vscodeIntegration.y + nodes.vscodeIntegration.height, x2: nodes.mcpWrapper.x + nodes.mcpWrapper.width/4, y2: nodes.mcpWrapper.y },
    
    // SOFIA Integrations to MCP
    { x1: nodes.sofiaIntegrations.x + nodes.sofiaIntegrations.width/2, y1: nodes.sofiaIntegrations.y + nodes.sofiaIntegrations.height, x2: nodes.mcpWrapper.x + nodes.mcpWrapper.width*3/4, y2: nodes.mcpWrapper.y },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-2 text-gray-100">
        Smart Knowledge Hub
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Centralized intelligence system with RAG-powered search and comprehensive knowledge management.
      </p>
      
      <div className="w-full max-w-7xl bg-black/20 rounded-2xl shadow-2xl p-4 border border-gray-700">
        <svg viewBox="0 0 1280 1040" width="100%" height="100%" aria-labelledby="diagram-title" role="img">
          <title id="diagram-title">Smart Knowledge Hub Architecture Diagram</title>
          
          {/* --- MCP Wrapper Background --- */}
          <rect x={nodes.mcpWrapper.x} y={nodes.mcpWrapper.y} width={nodes.mcpWrapper.width} height={nodes.mcpWrapper.height} 
                fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="10,5" opacity="0.8" rx="15" />
          <text x={nodes.mcpWrapper.x + 20} y={nodes.mcpWrapper.y - 10} fill="#059669" fontSize="16" fontWeight="bold">
            MCP (Model Context Protocol)
          </text>
          
          {/* --- Render Connection Lines --- */}
          {lines.map((line, i) => (
            <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#6b7280" strokeWidth="2" opacity="0.6" />
          ))}
          
          {/* --- Render Nodes (excluding mcpWrapper) --- */}
          {Object.values(nodes).filter(node => node.id !== 'mcpWrapper').map(node => <Node key={node.id} {...node} />)}
        </svg>
      </div>
       <div className="mt-6 text-center text-sm text-gray-500">
        <p>This diagram shows the comprehensive architecture for intelligent knowledge management and RAG-powered search capabilities.</p>
      </div>
    </div>
  );
}