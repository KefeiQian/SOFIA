import React from 'react';

// --- SVG Icon Components for Details ---
const KnowledgeIcon = () => <path d="M9 21a9 9 0 100-18 9 9 0 000 18zM9 4a1 1 0 011 1v5a1 1 0 11-2 0V5a1 1 0 011-1zM9 12a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1z" />;
const MonitorIcon = () => <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
const AIIcon = () => <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
const TicketIcon = () => <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />;
const WorkflowIcon = () => <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
const ReportIcon = () => <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
const AutomationIcon = () => <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 100-6 3 3 0 000 6z" />;
const TeamIcon = () => <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />;

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
                <div className={`w-full h-full px-5 py-5 rounded-2xl bg-gradient-to-br ${color} border-2 border-gray-600/50 shadow-2xl flex flex-col justify-center`}>
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
export default function IntelligentOrchestrationValidation() {
  const nodes = {
    endUsers: { 
      id: 'endUsers', 
      x: 435, y: 20, width: 350, height: 150, 
      title: 'End Users', 
      details: [
        { icon: <TeamIcon/>, text: 'Service Owners & Engineers' },
        { icon: <MonitorIcon/>, text: 'Infrastructure Teams' },
        { icon: <TeamIcon/>, text: 'Sovereign Cloud Buildout Team' },
      ], 
      color: 'from-green-800 to-green-900', 
      titleColor: 'text-green-200', 
      detailColor: 'text-green-300' 
    },
    
    proactiveMonitoring: { 
      id: 'proactiveMonitoring', 
      x: 20, y: 200, width: 280, height: 260, 
      title: 'Proactive Monitoring\nModule', 
      details: [
        { icon: <MonitorIcon/>, text: 'DeviceManager & AutoPilot data monitoring' },
        { icon: <MonitorIcon/>, text: 'LAM service runtime probe monitoring' },
        { icon: <AIIcon/>, text: 'AI-powered error log analysis' },
        { icon: <AutomationIcon/>, text: 'Auto-generates hotfix PRs' },
        { icon: <TicketIcon/>, text: 'Creates IcM tickets with AI summaries' },
      ], 
      color: 'from-blue-800 to-blue-900', 
      titleColor: 'text-blue-200', 
      detailColor: 'text-blue-300' 
    },
    
    incidentManagement: { 
      id: 'incidentManagement', 
      x: 320, y: 200, width: 280, height: 260, 
      title: 'Autonomous Incident\nManagement', 
      details: [
        { icon: <TicketIcon/>, text: 'Automated IcM ticket creation' },
        { icon: <MonitorIcon/>, text: 'Continuous ticket monitoring' },
        { icon: <WorkflowIcon/>, text: 'Auto-triggers validation workflows' },
        { icon: <AutomationIcon/>, text: 'Smart redeployment decisions' },
        { icon: <TeamIcon/>, text: 'Intelligent team notifications' },
      ], 
      color: 'from-purple-800 to-purple-900', 
      titleColor: 'text-purple-200', 
      detailColor: 'text-purple-300' 
    },
    
    workflowOrchestration: { 
      id: 'workflowOrchestration', 
      x: 620, y: 200, width: 280, height: 260, 
      title: 'Workflow Orchestration\nModule', 
      details: [
        { icon: <WorkflowIcon/>, text: 'Long-running daemon service' },
        { icon: <MonitorIcon/>, text: 'DMS & CIS integration' },
        { icon: <AIIcon/>, text: 'AI-powered error parsing' },
        { icon: <TeamIcon/>, text: 'Teams GraphAPI integration' },
        { icon: <AutomationIcon/>, text: 'Self-healing deployment' },
      ], 
      color: 'from-green-800 to-green-900', 
      titleColor: 'text-green-200', 
      detailColor: 'text-green-300' 
    },
    
    reportService: { 
      id: 'reportService', 
      x: 920, y: 200, width: 280, height: 260, 
      title: 'Report Service\nModule', 
      details: [
        { icon: <ReportIcon/>, text: 'Periodic status reports' },
        { icon: <AIIcon/>, text: 'AI-generated insights' },
        { icon: <TeamIcon/>, text: 'Automated DL notifications' },
        { icon: <MonitorIcon/>, text: 'Buildout status tracking' },
        { icon: <AutomationIcon/>, text: 'Zero-touch deployment reports' },
      ], 
      color: 'from-orange-800 to-orange-900', 
      titleColor: 'text-orange-200', 
      detailColor: 'text-orange-300' 
    },
    
    knowledgeHub: { 
      id: 'knowledgeHub', 
      x: 425, y: 520, width: 350, height: 140, 
      title: 'Knowledge Hub\n(External Module)', 
      details: [
        { icon: <KnowledgeIcon/>, text: 'Central repository of operational knowledge' },
        { icon: <AIIcon/>, text: 'AI-powered analysis and insights' },
      ], 
      color: 'from-gray-700 to-gray-800', 
      titleColor: 'text-gray-200', 
      detailColor: 'text-gray-300' 
    },
  };

  // Connection lines
  const lines = [
    // End Users to all four modules
    { x1: nodes.endUsers.x + nodes.endUsers.width/2 - 120, y1: nodes.endUsers.y + nodes.endUsers.height, x2: nodes.proactiveMonitoring.x + nodes.proactiveMonitoring.width/2, y2: nodes.proactiveMonitoring.y },
    { x1: nodes.endUsers.x + nodes.endUsers.width/2 - 40, y1: nodes.endUsers.y + nodes.endUsers.height, x2: nodes.incidentManagement.x + nodes.incidentManagement.width/2, y2: nodes.incidentManagement.y },
    { x1: nodes.endUsers.x + nodes.endUsers.width/2 + 40, y1: nodes.endUsers.y + nodes.endUsers.height, x2: nodes.workflowOrchestration.x + nodes.workflowOrchestration.width/2, y2: nodes.workflowOrchestration.y },
    { x1: nodes.endUsers.x + nodes.endUsers.width/2 + 120, y1: nodes.endUsers.y + nodes.endUsers.height, x2: nodes.reportService.x + nodes.reportService.width/2, y2: nodes.reportService.y },
    
    // All four modules to Knowledge Hub
    { x1: nodes.proactiveMonitoring.x + nodes.proactiveMonitoring.width/2, y1: nodes.proactiveMonitoring.y + nodes.proactiveMonitoring.height, x2: nodes.knowledgeHub.x + nodes.knowledgeHub.width/2 - 120, y2: nodes.knowledgeHub.y },
    { x1: nodes.incidentManagement.x + nodes.incidentManagement.width/2, y1: nodes.incidentManagement.y + nodes.incidentManagement.height, x2: nodes.knowledgeHub.x + nodes.knowledgeHub.width/2 - 40, y2: nodes.knowledgeHub.y },
    { x1: nodes.workflowOrchestration.x + nodes.workflowOrchestration.width/2, y1: nodes.workflowOrchestration.y + nodes.workflowOrchestration.height, x2: nodes.knowledgeHub.x + nodes.knowledgeHub.width/2 + 40, y2: nodes.knowledgeHub.y },
    { x1: nodes.reportService.x + nodes.reportService.width/2, y1: nodes.reportService.y + nodes.reportService.height, x2: nodes.knowledgeHub.x + nodes.knowledgeHub.width/2 + 120, y2: nodes.knowledgeHub.y },
    
    // Sequential module connections (left to right)
    { x1: nodes.proactiveMonitoring.x + nodes.proactiveMonitoring.width, y1: nodes.proactiveMonitoring.y + nodes.proactiveMonitoring.height/2, x2: nodes.incidentManagement.x, y2: nodes.incidentManagement.y + nodes.incidentManagement.height/2 },
    { x1: nodes.incidentManagement.x + nodes.incidentManagement.width, y1: nodes.incidentManagement.y + nodes.incidentManagement.height/2, x2: nodes.workflowOrchestration.x, y2: nodes.workflowOrchestration.y + nodes.workflowOrchestration.height/2 },
    { x1: nodes.workflowOrchestration.x + nodes.workflowOrchestration.width, y1: nodes.workflowOrchestration.y + nodes.workflowOrchestration.height/2, x2: nodes.reportService.x, y2: nodes.reportService.y + nodes.reportService.height/2 },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 text-white font-sans p-4">
      <h1 className="text-4xl font-bold mb-2 text-gray-100">
        Intelligent Orchestration & Validation
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Self-healing, AI-driven orchestration system for zero-touch deployment workflows.
      </p>
      
      <div className="w-full max-w-7xl bg-black/20 rounded-2xl shadow-2xl p-4 border border-gray-700">
        <svg viewBox="0 0 1220 680" width="100%" height="100%" aria-labelledby="diagram-title" role="img">
          <title id="diagram-title">Intelligent Orchestration & Validation Architecture Diagram</title>
          
          {/* --- Render Connection Lines --- */}
          {lines.map((line, i) => (
            <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#6b7280" strokeWidth="2" opacity="0.6" />
          ))}
          
          {/* --- Render Nodes --- */}
          {Object.values(nodes).map(node => <Node key={node.id} {...node} />)}
        </svg>
      </div>
       <div className="mt-6 text-center text-sm text-gray-500">
        <p>This diagram shows the comprehensive orchestration system enabling zero-touch, self-healing deployments.</p>
      </div>
    </div>
  );
}