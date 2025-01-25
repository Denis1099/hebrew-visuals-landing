import { useState } from "react";
import { Settings2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const adjustFontSize = (percentage: number) => {
    setFontSize(percentage);
    document.documentElement.style.fontSize = `${percentage}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white shadow-lg">
            <Settings2 className="h-6 w-6" />
            <span className="sr-only">הגדרות נגישות</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>הגדרות נגישות</SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">גודל טקסט</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => adjustFontSize(100)}
                  className="flex-1"
                >
                  רגיל
                </Button>
                <Button
                  variant="outline"
                  onClick={() => adjustFontSize(125)}
                  className="flex-1"
                >
                  בינוני
                </Button>
                <Button
                  variant="outline"
                  onClick={() => adjustFontSize(150)}
                  className="flex-1"
                >
                  גדול
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">ניגודיות</h3>
              <Button
                variant="outline"
                onClick={toggleHighContrast}
                className="w-full"
              >
                {highContrast ? 'ניגודיות רגילה' : 'ניגודיות גבוהה'}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AccessibilityWidget;