/// <reference types="node" />
import { Nitrosend } from "@nitrosend/sdk";

function keyFromEnv(): string {
  const key = process.env.NITROSEND_API_KEY;
  if (!key) throw new Error("NITROSEND_API_KEY is not set");
  return key;
}

const ns = new Nitrosend(keyFromEnv());

async function main(): Promise<void> {
  const message = await ns.messages.send(
    {
      channel: "email",
      to: "proof@dogfood.nitrosend.net",
      subject: "First Nitrosend SDK send from an autonomous agent",
      html: "<p>Hello proof inbox. This is a real send made with the TypeScript SDK.</p>",
    },
    "first-sdk-send-20261021",
  );
  console.log(JSON.stringify({ id: message.id, status: message.status, to: message.to }));
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
