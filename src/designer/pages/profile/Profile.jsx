import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@mui/material";
import { Avatar } from "@mui/material";
import { Edit, ShoppingCart, Image, VideoLibrary } from "@mui/icons-material";
import  "./Profile.module.scss";

export default function DesignerProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Creative designer with a passion for aesthetics.",
    avatar: "https://via.placeholder.com/100",
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="p-6 flex flex-col items-center text-center">
        <Avatar className="w-24 h-24" src={profile.avatar} alt="Profile Picture" />
        <h2 className="text-xl font-bold mt-2">{profile.name}</h2>
        <p className="text-gray-500">{profile.bio}</p>
        <Button className="mt-3 flex items-center gap-2" startIcon={<Edit />}>
          Edit Profile
        </Button>
      </Card>

      <Tabs defaultValue="posts" className="mt-6">
        <TabsList className="flex justify-center gap-4">
          <TabsTrigger value="orders" startIcon={<ShoppingCart />}>
            View Orders
          </TabsTrigger>
          <TabsTrigger value="posts" startIcon={<Image />}>
            Posts
          </TabsTrigger>
          <TabsTrigger value="reels" startIcon={<VideoLibrary />}>
            Reels
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <Card className="mt-4 p-4">Order history will be displayed here.</Card>
        </TabsContent>
        <TabsContent value="posts">
          <Card className="mt-4 p-4">Posts will be displayed here.</Card>
        </TabsContent>
        <TabsContent value="reels">
          <Card className="mt-4 p-4">Reels will be displayed here.</Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
