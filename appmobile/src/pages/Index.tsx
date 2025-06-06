
import React from "react";
import AuthForm from "@/components/AuthForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1A0800] via-[#210D04] to-[#0A0400] px-4">
      <div className="animate-scale-in">
        <div className="mb-8 text-center">
          <div className="h-56 w-auto mx-auto mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/e0fd001c-0828-4e6a-ab50-c214de822f44.png" 
              alt="Vinicius Di Fiore Treinador" 
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
        <AuthForm showRegister={false} />
      </div>
    </div>
  );
};

export default Index;
