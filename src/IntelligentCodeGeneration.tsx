import React from 'react';

// --- SVG Icon Components for Details ---
const CodeIcon = () => <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const ScanIcon = () => <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const ConfigIcon = () => <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" />;
const PullRequestIcon = () => <path d="M7 6V3a1 1 0 011-1h4a1 1 0 011 1v3m0 0v6m0-6h4l-4-4-4 4h4zM3 18a2 2 0 104 0 2 2 0 00-4 0zm14 0a2 2 0 104 0 2 2 0 00-4 0z" />;
const AIIcon = () => <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
const ProcessIcon = () => <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;

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
    const detailItems = details.map(item => (
        <div key={item.text} className="flex items-center justify-center text-center space-x-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">{item.icon}</svg>
            <span>{item.text}</span>
        </div>
    ));
    
    return (
        <g transform={`translate(${x}, ${y})`}>
            <foreignObject width={width} height={height}>
                <div className={`w-full h-full px-6 py-6 rounded-2xl bg-gradient-to-br ${color} border-2 border-gray-600/50 shadow-2xl flex flex-col justify-center`}>
                    <h3 className={`text-center font-bold text-lg ${titleColor} mb-3 whitespace-pre-line`}>{title}</h3>
                    <div className={`space-y-2 text-sm ${detailColor} opacity-95`}>
                        {detailItems}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

// --- Main Component ---
export default function IntelligentCodeGeneration() {
  const nodes = {
    serviceOwners: { 
      id: 'serviceOwners', 
      x: 325, y: 20, width: 350, height: 130, 
      title: 'Service Owners', 
      details: [
        { icon: <CodeIcon/>, text: 'Provide Repository Details' },
        { icon: <ConfigIcon/>, text: 'Request Config Updates' },
      ], 
      color: 'from-green-800 to-green-900', 
      titleColor: 'text-green-200', 
      detailColor: 'text-green-300' 
    },
    
    soConfigAssistant: { 
      id: 'soConfigAssistant', 
      x: 250, y: 200, width: 500, height: 260, 
      title: 'SovConfigAssistant\n(AI-Driven Code Generation)', 
      details: [
        { icon: <ScanIcon/>, text: 'Automatically scans codebase' },
        { icon: <AIIcon/>, text: 'Leverages LLMs for intelligent generation' },
        { icon: <CodeIcon/>, text: 'Generates necessary modifications' },
        { icon: <PullRequestIcon/>, text: 'Creates pull requests automatically' },
        { icon: <ProcessIcon/>, text: 'Streamlines workflows & eliminates manual effort' },
      ], 
      color: 'from-blue-800 to-blue-900', 
      titleColor: 'text-blue-200', 
      detailColor: 'text-blue-300' 
    },
    
    currentScenarios: { 
      id: 'currentScenarios', 
      x: 40, y: 480, width: 430, height: 220, 
      title: 'Current Scenarios\n(100+ PRs Created)', 
      details: [
        { icon: <ConfigIcon/>, text: 'Sovereign Cloud Config Updates' },
        { icon: <ConfigIcon/>, text: 'C#, INI, JSON, OMAP/SAP files' },
        { icon: <CodeIcon/>, text: 'IC3 Code Changes' },
        { icon: <ProcessIcon/>, text: 'Automated deployment workflows' },
      ], 
      color: 'from-purple-800 to-purple-900', 
      titleColor: 'text-purple-200', 
      detailColor: 'text-purple-300' 
    },
    
    futureScenarios: { 
      id: 'futureScenarios', 
      x: 530, y: 480, width: 430, height: 220, 
      title: 'Future Scenarios\n(In Development)', 
      details: [
        { icon: <ConfigIcon/>, text: 'AAD First Party App Support' },
        { icon: <ProcessIcon/>, text: 'France Sovereign Cloud Onboarding' },
        { icon: <AIIcon/>, text: 'Knowledge Hub Integration' },
        { icon: <CodeIcon/>, text: 'Enhanced LLM Engineering Solutions' },
      ], 
      color: 'from-orange-800 to-orange-900', 
      titleColor: 'text-orange-200', 
      detailColor: 'text-orange-300' 
    },
  };

  // Connection lines
  const lines = [
    // Service Owners to SoConfigAssistant
    { x1: nodes.serviceOwners.x + nodes.serviceOwners.width/2, y1: nodes.serviceOwners.y + nodes.serviceOwners.height, x2: nodes.soConfigAssistant.x + nodes.soConfigAssistant.width/2, y2: nodes.soConfigAssistant.y },
    // SoConfigAssistant to Current Scenarios
    { x1: nodes.soConfigAssistant.x + nodes.soConfigAssistant.width/2 - 100, y1: nodes.soConfigAssistant.y + nodes.soConfigAssistant.height, x2: nodes.currentScenarios.x + nodes.currentScenarios.width/2, y2: nodes.currentScenarios.y },
    // SoConfigAssistant to Future Scenarios
    { x1: nodes.soConfigAssistant.x + nodes.soConfigAssistant.width/2 + 100, y1: nodes.soConfigAssistant.y + nodes.soConfigAssistant.height, x2: nodes.futureScenarios.x + nodes.futureScenarios.width/2, y2: nodes.futureScenarios.y },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-2 text-gray-100">
        Intelligent Code Generation
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        AI-driven tool that automates code generation and deployment for Sovereign Cloud environments.
      </p>
      
      <div className="w-full max-w-7xl bg-black/20 rounded-2xl shadow-2xl p-4 border border-gray-700">
        <svg viewBox="0 0 1000 720" width="100%" height="100%" aria-labelledby="diagram-title" role="img">
          <title id="diagram-title">Intelligent Code Generation Architecture Diagram</title>
          
          {/* --- Render Connection Lines --- */}
          {lines.map((line, i) => (
            <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#6b7280" strokeWidth="2" opacity="0.6" />
          ))}
          
          {/* --- Render Nodes --- */}
          {Object.values(nodes).map(node => <Node key={node.id} {...node} />)}
        </svg>
      </div>
       <div className="mt-6 text-center text-sm text-gray-500">
        <p>This diagram shows the SoConfigAssistant workflow and its current and future capabilities.</p>
      </div>
    </div>
  );
}