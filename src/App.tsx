import Text from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Text variant="body-sm-bold" className="text-pink-base">
        ToDo List
      </Text>
      <Text className="text-green-base">ToDo List</Text>
      <Text variant="body-md-bold">ToDo List</Text>
    </div>
  );
}
