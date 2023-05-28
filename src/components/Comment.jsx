import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andersontucunduva.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Anderson Tucunduva</strong>
              <time title="11 de Maio as 8:13h" dateTime="2023-04-30 08:13:30">
                Cerca de 1h atras
              </time>
            </div>

            <button title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
