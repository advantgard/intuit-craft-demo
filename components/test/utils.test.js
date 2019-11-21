import { postData } from "../utils";

const dummyData = {
  userId: 1,
  title: "This is a post title",
  body: "This is the post body"
};

describe("postData", () => {
  test("Should return true if the data was submitted successfully", () => {
    function successFn(response) {
      expect(response).toBeTruthy;
      done();
    }

    function errorFn() {}

    postData(dummyData, successFn, errorFn);
  });
});
