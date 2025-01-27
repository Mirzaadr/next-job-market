import AuthButton from "@/components/auth/AuthButton";
import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <div className="space-y-6 items-center justify-center">
          <h1 className="text-6xl font-semibold text-white drop-shadow-md">Basic App</h1>
          <p className="text-white text-lg">
            A Basic NextJS Application. 
            This showcase a basic nextjs application with authorization and basic ui components.
          </p>
          <div>
            <AuthButton asChild>
              <Button>
                Get Started
              </Button>
            </AuthButton>
          </div>
        </div>
      </main>
    </>
    
  );
}
