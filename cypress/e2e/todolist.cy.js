describe("투두리스트 애플리케이션 테스트", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("체크박스 클릭", () => {
        cy.get("#1").click();
    });

    it("체크박스 클릭해제", () => {
        cy.get("#1").click();
        cy.get("#1").click();
    });

    it("투두리스트 추가하기", () => {
        cy.get("#addTodoForm").type("쿠키 놀아주기").get("#addTodoBtn").click();
        cy.contains("쿠키 놀아주기");
    });

    it("투두리스트 수정하기", () => {
        cy.get("#list1").contains("수정").click();
        cy.get("#modifyTodoForm").type("1234").get("#modifydone").click();
        cy.contains("투두 리스트 만들기1234");
    });

    it("투두리스트 삭제하기", () => {
        cy.get("#list2").contains("삭제").click();
    });
});
