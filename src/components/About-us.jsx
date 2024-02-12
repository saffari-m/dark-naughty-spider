import {
  info,
  infoStoreReducer,
  infoStoreActions,
} from "../hooks/store/useInfoStore";

const changeName = () => {
  infoStoreReducer(
    {
      name: "Mohammad",
    },
    { type: infoStoreActions.SET_NAME }
  );
};

const changeLastName = () => {
  infoStoreReducer(
    {
      lName: "Rezayi",
    },
    { type: infoStoreActions.SET_LNAME }
  );
};

const changeInfo = () => {
  infoStoreReducer(
    {
      name: "Abbas",
      lName: "Masoomi",
    },
    { type: infoStoreActions.SET_INFO }
  );
};
const Styles = {
  smallButton:
    "min-w-[45%] bg-sky-100 border border-sky-500 rounded-xl h-[50px] transition hover:bg-sky-200",
  bigButton:
    "w-full bg-sky-100 border border-sky-500 rounded-xl h-[50px] transition hover:bg-sky-200",
};
export default function AboutUs() {
  return (
    <div class="flex justify-center items-center flex-col w-full">
      <div class="flex flex-col p-4 w-[400px] bg-gray-200 border border-gray-500 rounded-xl ">
        <h2>My name is {info.name}</h2>
        <h2>My LastName is {info.lName}</h2>
      </div>

      <div class="flex flex-col w-[400px] ">
        <div class="flex w-full justify-between py-2 ">
          <button class={Styles.smallButton} onClick={changeName}>
            Change Name
          </button>
          <button class={Styles.smallButton} onClick={changeLastName}>
            Change Last Name
          </button>
        </div>

        <div class="flex w-full justify-center items-center">
          <button class={Styles.bigButton} onClick={changeInfo}>
            Change Full Info
          </button>
        </div>
      </div>
    </div>
  );
}
