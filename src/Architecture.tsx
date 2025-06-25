import React from 'react';

// --- SVG Icon Components for Details ---
const ConfigIcon = () => <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" />;
const OrchestrateIcon = () => <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />;
const ValidateIcon = () => <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0012 2.5a11.954 11.954 0 009.834 2.499l.118-.04a.953.953 0 00.395-1.538l-.118-.04A13.955 13.955 0 0012 1c-3.13 0-6.024 1.09-8.416 2.919l-.118.04a.953.953 0 00-.395 1.538l.118.04zM12 21a13.955 13.955 0 008.416-2.919l.118-.04a.953.953 0 00-.395-1.538l-.118-.04A11.954 11.954 0 0012 19.5a11.954 11.954 0 00-9.834-2.499l-.118.04a.953.953 0 00.395 1.538l.118.04A13.955 13.955 0 0012 21zm-1.08-9.12a3.502 3.502 0 014.16 0l.118.04a.953.953 0 001.275-1.275l-.118-.04a5.502 5.502 0 00-6.536 0l-.118.04a.953.953 0 001.275 1.275l.118-.04z" clipRule="evenodd" />;
const KnowledgeIcon = () => <path d="M9 21a9 9 0 100-18 9 9 0 000 18zM9 4a1 1 0 011 1v5a1 1 0 11-2 0V5a1 1 0 011-1zM9 12a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1z" />;


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
                <div className={`w-full h-full px-6 py-5 rounded-2xl bg-gradient-to-br ${color} border-2 border-gray-600/50 shadow-2xl flex flex-col`}>
                    <h3 className={`text-center font-bold text-lg ${titleColor} mb-3 whitespace-pre-line`}>{title}</h3>
                    <div className={`space-y-2 text-sm ${detailColor} opacity-95`}>
                        {detailItems}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};


// --- Main App Component ---
export default function App() {
  
  const nodes = {
    user: { id: 'user', x: 325, y: 20, width: 350, height: 130, title: 'End Users', details: [
        { icon: <ConfigIcon/>, text: 'Substrate Service Owners' },
        { icon: <OrchestrateIcon/>, text: 'Sovereign Cloud Buildout Team' },
    ], color: 'from-green-800 to-green-900', titleColor: 'text-green-200', detailColor: 'text-green-300' },
    
    codeGen: { id: 'codeGen', x: 40, y: 180, width: 430, height: 200, title: 'Intelligent Code Generation', details: [
        { icon: <ConfigIcon/>, text: 'Stops manual config errors (JSON, YML, C#, ...)' },
        { icon: <ConfigIcon/>, text: 'Stops build-breaking errors (e.g. cert names)' },
        { icon: <ConfigIcon/>, text: 'Generates reliable configs based on templates' },
        { icon: <ConfigIcon/>, text: 'Reduces multi-day deployment rollbacks' },
    ], color: 'from-blue-800 to-blue-900', titleColor: 'text-blue-200', detailColor: 'text-blue-300' },
    
    deploy: { id: 'deploy', x: 530, y: 180, width: 430, height: 200, title: 'Intelligent Orchestration & Validation', details: [
        { icon: <OrchestrateIcon/>, text: 'AI-Driven E2E Orchestration (via Dependency Graph)' },
        { icon: <ValidateIcon/>, text: 'Proactive Anomaly Detection (vs. reactive)' },
        { icon: <ValidateIcon/>, text: 'Automates validation checks (XTS, gcam, etc.)' },
        { icon: <OrchestrateIcon/>, text: 'Autonomous Incident Management (auto-IcM)' },
    ], color: 'from-purple-800 to-purple-900', titleColor: 'text-purple-200', detailColor: 'text-purple-300' },
    
    knowledge: { id: 'knowledge', x: 250, y: 450, width: 500, height: 240, title: 'Smart Knowledge Hub\n(Central Nervous System)', details: [
        { icon: <KnowledgeIcon/>, text: 'The single source of truth; breaks down knowledge silos' },
        { icon: <KnowledgeIcon/>, text: 'Ingests: Incidents, IcM tickets, TSGs, Scripts, Logs' },
        { icon: <KnowledgeIcon/>, text: 'Maintains master dependency graph for orchestration' },
        { icon: <KnowledgeIcon/>, text: 'Fuels AI for config generation & incident management' },
        { icon: <KnowledgeIcon/>, text: 'Acts as "Copilot" for engineers to provide clear answers' },
    ], color: 'from-gray-700 to-gray-800', titleColor: 'text-gray-200', detailColor: 'text-gray-300' }
  };

  // Connection lines
  const lines = [
    // User to Config Gen
    { x1: nodes.user.x + nodes.user.width/2 - 80, y1: nodes.user.y + nodes.user.height, x2: nodes.codeGen.x + nodes.codeGen.width/2, y2: nodes.codeGen.y },
    // User to Deploy
    { x1: nodes.user.x + nodes.user.width/2 + 80, y1: nodes.user.y + nodes.user.height, x2: nodes.deploy.x + nodes.deploy.width/2, y2: nodes.deploy.y },
    // Config Gen to Knowledge
    { x1: nodes.codeGen.x + nodes.codeGen.width/2, y1: nodes.codeGen.y + nodes.codeGen.height, x2: nodes.knowledge.x + 150, y2: nodes.knowledge.y },
    // Deploy to Knowledge
    { x1: nodes.deploy.x + nodes.deploy.width/2, y1: nodes.deploy.y + nodes.deploy.height, x2: nodes.knowledge.x + 350, y2: nodes.knowledge.y },
    // Config Gen to Deploy
    { x1: nodes.codeGen.x + nodes.codeGen.width, y1: nodes.codeGen.y + nodes.codeGen.height/2, x2: nodes.deploy.x, y2: nodes.deploy.y + nodes.deploy.height/2 },
  ];


  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-2 text-gray-100">
        SOFIA: AI-Driven Cloud Buildout System
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        An intelligent, self-healing system to automate Sovereign Cloud deployment.
      </p>
      
      <div className="w-full max-w-7xl bg-black/20 rounded-2xl shadow-2xl p-4 border border-gray-700">
        <svg viewBox="0 0 1000 720" width="100%" height="100%" aria-labelledby="diagram-title" role="img">
          <title id="diagram-title">SOFIA System Architecture Diagram</title>
          
          {/* --- Render Connection Lines --- */}
          {lines.map((line, i) => (
            <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#6b7280" strokeWidth="2" opacity="0.6" />
          ))}
          
          {/* --- Render Nodes --- */}
          {Object.values(nodes).map(node => <Node key={node.id} {...node} />)}
        </svg>
      </div>
       <div className="mt-6 text-center text-sm text-gray-500">
        <p>This diagram reflects the core challenges and the AI-powered solutions of the SOFIA system.</p>
      </div>
    </div>
  );
}

