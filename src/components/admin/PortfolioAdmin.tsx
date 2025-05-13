
import { useState, useEffect } from "react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { FileVideo, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

// Define the form schema for video validation
const videoSchema = z.object({
  id: z.string().min(1, "YouTube ID is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

type VideoFormValues = z.infer<typeof videoSchema>;

interface Video {
  id: string;
  title: string;
  description?: string;
}

const PortfolioAdmin = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<VideoFormValues>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      id: "",
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    // In a real implementation, this would be an API call
    try {
      // For demonstration, we'll fetch from the local JSON
      import("@/data/portfolioVideos.json").then((data) => {
        setVideos(data.default);
      });
    } catch (error) {
      console.error("Error loading videos:", error);
    }
  }, []);

  const onSubmit = (data: VideoFormValues) => {
    setIsLoading(true);
    
    // In a real implementation, this would be an API call
    // For demonstration purposes, we'll just update the local state
    try {
      // Add the new video to our state
      const newVideo = {
        id: data.id,
        title: data.title,
        description: data.description || "",
      };
      
      const updatedVideos = [...videos, newVideo];
      setVideos(updatedVideos);
      
      // In a real implementation, this would save to the server
      // For now, we'll simulate a successful save
      toast({
        title: "Success",
        description: "Video added successfully!",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error adding video:", error);
      toast({
        title: "Error",
        description: "Failed to add video. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveVideo = (idToRemove: string) => {
    // In a real implementation, this would be an API call
    try {
      const updatedVideos = videos.filter((video) => video.id !== idToRemove);
      setVideos(updatedVideos);
      
      toast({
        title: "Success",
        description: "Video removed successfully!",
      });
    } catch (error) {
      console.error("Error removing video:", error);
      toast({
        title: "Error",
        description: "Failed to remove video. Please try again.",
        variant: "destructive",
      });
    }
  };

  const extractYoutubeId = (url: string) => {
    // Handle various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-[#6b46c1]">ניהול סרטוני פורטפוליו</h2>
      
      {/* Add new video form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4">הוספת סרטון חדש</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>YouTube ID או URL</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="הכנס YouTube ID או URL" 
                      {...field} 
                      onChange={(e) => field.onChange(extractYoutubeId(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>כותרת</FormLabel>
                  <FormControl>
                    <Input placeholder="הכנס כותרת" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>תיאור (אופציונלי)</FormLabel>
                  <FormControl>
                    <Input placeholder="הכנס תיאור" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="bg-[#6b46c1] hover:bg-[#5a3a9e]" disabled={isLoading}>
              <Plus className="mr-2 h-4 w-4" />
              הוסף סרטון
            </Button>
          </form>
        </Form>
      </div>
      
      {/* Videos list */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">סרטונים קיימים</h3>
        {videos.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>תמונה ממוזערת</TableHead>
                <TableHead>YouTube ID</TableHead>
                <TableHead>כותרת</TableHead>
                <TableHead>תיאור</TableHead>
                <TableHead>פעולות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.map((video) => (
                <TableRow key={video.id}>
                  <TableCell>
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/default.jpg`} 
                      alt={video.title}
                      className="w-24 h-auto rounded"
                    />
                  </TableCell>
                  <TableCell>{video.id}</TableCell>
                  <TableCell>{video.title}</TableCell>
                  <TableCell>{video.description}</TableCell>
                  <TableCell>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleRemoveVideo(video.id)}
                    >
                      הסר
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-8">
            <FileVideo className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-gray-500">אין סרטונים עדיין</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioAdmin;
