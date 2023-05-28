import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Acabei de subir mais um projeto" },
      { type: "Link", content: "janew.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Teacher @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      { type: "paragraph", content: "Acabei de subir mais um projeto" },
      { type: "Link", content: "janew.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-03 10:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/andersontucunduva.png",
      name: "Anderson Tucunduva",
      role: "CEO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Presidente Aqui na area" },
      { type: "paragraph", content: "Acabei de subir mais um projeto" },
      { type: "Link", content: "janew.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-05 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
