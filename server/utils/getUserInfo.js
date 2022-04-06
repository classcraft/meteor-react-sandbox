// @flow
import { wait } from "/imports/debug/wait";

type UserInfo = {|
  avatar: string,
  name: string,
|};

export async function getUserInfo(): Promise<UserInfo> {
  await wait(1000);

  return {
    avatar:
      "https://files.classcraft.com/composited-avatars/heads/b3be020017effdfe2219dfb8e8cb666be765b695.png",
    name: "Sam",
  };
}
