"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        voluptas ipsa est voluptate numquam labore nesciunt harum similique
        veniam, eveniet suscipit, quia, nam quam? Fugiat voluptas, obcaecati
        laborum nesciunt eum consequatur iure minus culpa possimus aspernatur
        cumque quasi assumenda asperiores, neque voluptatem aut sequi ab eius
        itaque quod animi. Non, perferendis excepturi iste facere accusantium
        veritatis illo deleniti eligendi distinctio numquam reiciendis eos sunt
        laboriosam voluptate, magni magnam eum nemo rem? Iure enim beatae modi
        laudantium in, architecto quo tempore autem nulla labore praesentium
        culpa, tenetur eveniet suscipit. Suscipit modi excepturi qui recusandae
        quod vitae nostrum! Beatae obcaecati eum iste!
      </p>

      <button
        className="bg-sky-300 px-3 py-2 rounded-md"
        onClick={() => {
          alert("Ejecutando código!");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}
