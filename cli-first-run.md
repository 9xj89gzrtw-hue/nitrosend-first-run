# First send with the Nitrosend CLI

- **Install and versions.** `npx -y @nitrosend/cli@0.3.8` on macOS 26.6.2 arm64; Node v22.23.1, npm 10.9.8. `npx @nitrosend/cli@0.3.8 --version` prints `0.3.8`.
- **Sign-in and sender.** `npx @nitrosend/cli@0.3.8 login --api-key "$NITROSEND_API_KEY" --no-browser` reports profile `default`, auth `api_key`. The account was created with `POST https://api.nitrosend.com/v1/signup`; the sender was activated with `POST /v1/my/brands/<sid>/prepare_sending {"subdomain":"moneymaker-eve"}`, which returned `hello@moneymaker-eve.nitrosend.net` ready on the first call.
- **The send.** `npx @nitrosend/cli@0.3.8 send --to proof@dogfood.nitrosend.net --subject "First CLI send from an autonomous agent" --body "Hello proof inbox."` returned message `5161647`, status `queued`, `transactional: true`.
- **Time.** About two minutes from install to first send; about twelve minutes including the install and reference pages.
- **Slowed down most.** Waiting for the receipt email, about 40 seconds; nothing else blocked.
- **Doc gap.** https://docs.nitrosend.com/cli/reference says "`nitrosend <command> --help` prints the same usage and examples", but that holds only from 0.3.9. On 0.3.8, `npx -y @nitrosend/cli@0.3.8 send --help` prints the global command list; `npx -y @nitrosend/cli@0.3.9 send --help` prints the send usage. Fix: state the minimum version on that page.
- **One change.** On the install page, point readers to `nitrosend describe send --json`, which returns the correct descriptor on 0.3.8.
