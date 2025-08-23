import React from "react";

export default function Loader({variant="spinner",size=48,label="dechub.ai",fullscreen=false}){
  const s={width:size,height:size};
  const Label=label?<div className="mt-3 text-sm text-gray-600">{label}</div>:null;
  if(fullscreen)return(<div className="fixed inset-0 grid place-items-center bg-white/60 backdrop-blur-sm z-50"><Inner v={variant} s={s}/>{Label}</div>);
  return(<div className="inline-flex flex-col items-center"><Inner v={variant} s={s}/>{Label}</div>);
}

function Inner({v,s}){
  if(v==="spinner")return(<div className="rounded-full border-4 border-gray-200 border-t-gray-900 animate-spin" style={s}/>);
  if(v==="dots")return(<div className="flex items-end gap-1" style={{height:s.height}}>
    <Dot d="0ms"/>
    <Dot d="150ms"/>
    <Dot d="300ms"/>
  </div>);
  if(v==="bar")return(<div className="relative w-[200px] h-1.5 bg-gray-200 overflow-hidden rounded-full"><div className="absolute inset-y-0 left-0 w-1/3 bg-gray-900 animate-[slide_1.2s_ease-in-out_infinite]"/></div>);
  if(v==="pulse")return(<div className="w-[160px] h-[14px] rounded-md bg-gray-200 relative overflow-hidden"><div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-300 to-transparent"/></div>);
  return(<div className="rounded-full border-4 border-gray-200 border-t-gray-900 animate-spin" style={s}/>);
}

function Dot({d}){
  return(<div className="w-2.5 h-2.5 rounded-full bg-gray-900 animate-bounce" style={{animationDelay:d}}/>);
}

const style=`@keyframes slide{0%{transform:translateX(-100%)}50%{transform:translateX(60%)}100%{transform:translateX(100%)}}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`;

export function Demo(){
  return(
    <div className="min-h-screen grid place-items-center p-10">
      <div className="grid sm:grid-cols-4 gap-10 text-center">
        <div className="p-6 rounded-2xl shadow bg-white"><Loader variant="spinner" label="Loading"/></div>
        <div className="p-6 rounded-2xl shadow bg-white"><Loader variant="dots" label="Fetching"/></div>
        <div className="p-6 rounded-2xl shadow bg-white"><Loader variant="bar" label="Syncing"/></div>
        <div className="p-6 rounded-2xl shadow bg-white"><Loader variant="pulse" label="Preparing"/></div>
      </div>
      <style>{style}</style>
    </div>
  );
}
