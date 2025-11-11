"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/useConvexQuery";
import { ArrowRight } from "lucide-react";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import PostEditor from "@/components/PostEditor";

const page = () => {
  // First check there is any draft or not and also check the user is logged in or not
  const { data: existingDraft, isLoading: isDraftLoading } = useConvexQuery(
    api.posts.getUserDraft
  );

  const { data: currentUser, isLoading: userLoading } = useConvexQuery(
    api.users.getCurrentUser
  );

  if (isDraftLoading || userLoading) {
    return <BarLoader width={"100%"} color="#D8B4FE" />;
  }

  if (!currentUser?.username) {
    return (
      <div className="h-80 bg-slate-800 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center space-y-6">
          <h1 className="text-3xl font-bold text-white">Username Required</h1>
          <p className="text-slate-400 text-lg">
            Set up a username to create and share your post
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard/settings">
              <Button variant={"primary"}>
                Set Up Username
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <PostEditor initialData={existingDraft} mode="create" />;
};

export default page;
