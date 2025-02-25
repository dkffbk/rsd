import { Alert, Box } from "@mui/material";

import Form from "../components/Form";
import Item from "../components/Item";

import { useApp } from "../ThemedApp";

import { useQuery, useMutation } from "react-query";
import { queryClient } from "../ThemedApp";
import { postPost } from "../libs/fetcher";

const api = import.meta.env.VITE_API;

export default function Home() {
  const { showForm, setGlobalMsg, auth } = useApp();
  const { isLoading, isError, error, data } = useQuery("posts", async () => {
    const res = await fetch(`${api}/content/posts`);
    return res.json();
  });

  const remove = useMutation(
    async (id) => {
      await fetch(`${api}/content/posts/${id}`, {
        method: "DELETE",
      });
    },
    {
      onMutate: (id) => {
        queryClient.cancelQueries("posts");
        queryClient.setQueryData("posts", (old) =>
          old.filter((item) => item.id !== id)
        );
        setGlobalMsg("A post deleted");
      },
    }
  );

  const add = useMutation(async (content) => postPost(content), {
    onSuccess: async (post) => {
      await queryClient.cancelQueries("posts");
      await queryClient.setQueryData("posts", (old) => [post, ...old]);
      setGlobalMsg("A post has been added...");
    },
  });

  if (isError) {
    return (
      <Box>
        <Alert severity="warning">{error.message}</Alert>
      </Box>
    );
  }

  if (isLoading) {
    return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
  }

  return (
    <Box>
      {showForm && auth && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.id} item={item} remove={remove.mutate} />;
      })}
    </Box>
  );
}
