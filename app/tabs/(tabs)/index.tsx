import EditScreenInfo from "@/components/EditScreenInfo";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { ArrowLeftIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";

export default function Home() {
  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Expo V3</Heading>
      <Divider className="my-[30px] w-[80%]" />
      <Text className="p-4">Example below to use gluestack-ui components.</Text>
      <EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
      <Button action="primary" className="mt-4" onPress={() => router.back()}>
        <ButtonIcon as={ArrowLeftIcon} />
        <ButtonText>Go Back Home</ButtonText>
      </Button>
    </Center>
  );
}
