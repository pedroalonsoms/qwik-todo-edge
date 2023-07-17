import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const items = useSignal(["hello", "world"]);
  const dialogRef = useSignal<HTMLDialogElement>();

  return (
    <>
      <dialog
        open={false}
        ref={dialogRef}
        class="rounded border border-gray-700 bg-black"
      >
        <form class="flex flex-col gap-4 p-2" method="dialog">
          <input
            type="text"
            placeholder="Type something..."
            autoFocus={true}
            class="rounded border border-gray-700 bg-black p-2 text-white outline-1 outline-white"
          />
          <button
            class="rounded border border-gray-700 px-2 py-1 text-sm text-gray-500"
            type="submit"
          >
            Done
          </button>
        </form>
      </dialog>
      <div class="mx-auto max-w-screen-sm px-6 pt-6">
        <nav class="flex items-center justify-between">
          <span class="text-3xl text-white">ToDo's</span>
          <button
            class="rounded border border-gray-700 px-2 py-1 text-sm text-gray-500"
            onClick$={() => {
              dialogRef.value?.show();
            }}
          >
            Add
          </button>
        </nav>
        {items.value.map((item, idx) => (
          <div
            class="mt-2 flex items-center justify-between rounded border border-gray-700 px-5 py-3 text-white"
            key={idx}
          >
            <span>{item}</span>
            <button
              class="rounded border border-gray-700 px-2 py-1 text-sm text-red-400"
              onClick$={() => {
                items.value = items.value.filter((_, i) => i !== idx);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
