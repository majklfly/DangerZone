import mockAxios from "axios";
import { testStore } from "../../utils";
import { getChapters } from "./chapter";

describe("Chapter actions", () => {
  it("Store is updated correctly", async () => {
    const expectedState = [
      {
        title: "Test1",
        text: "Text1"
      },
      {
        title: "Test2",
        text: "Text2"
      },
      {
        title: "Test3",
        text: "Text3"
      }
    ];
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: []
        }
      })
    );
    const store = testStore();

    const response = await getChapters();
    console.log(response);

    // return store.dispatch(getChapters()).then(() => {
    //   const newState = store.getState();
    //   expect(newState).toBe(1);
    // });
    // console.log("hello");
  });
});
