import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';
import React from "react";
import renderer from "react-test-renderer";

describe('The test detail component', () => {
    describe('The container element', () => {
        describe("mapStateToProps", () => {
            it('should map state to props correctly', () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big",
                };
                const appState = {
                    questions: [sampleQuestion],
                };
                const ownProps = {
                    question_id: 42
                };
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(sampleQuestion);
            });
        })
    })
    describe('The display element', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <QuestionDetailDisplay
                    title="The meaning of life"
                    body="42"
                    answer_count={0}
                    tags={[`hit`]}
                />
            );
            expect(tree.toJSON).toMatchSnapshot();
        });
    });
});