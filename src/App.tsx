import Text from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-4">
        <Text variant="body-sm-bold" className="text-pink-base">
          ToDo List
        </Text>
        <Text className="text-green-base">ToDo List</Text>
        <Text variant="body-md-bold">ToDo List</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} className="fill-pink-base" />
        <Icon svg={PlusIcon} className="fill-pink-base" />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} className="fill-pink-base" />
        <Icon svg={XIcon} className="fill-pink-base" />
      </div>
    </div>
  );
}
