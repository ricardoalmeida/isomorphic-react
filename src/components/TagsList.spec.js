import React from "react";
import TagsList from "./TagsList"
import { create } from "react-test-renderer";

describe('The tags List', () => {
    it('renders as expected', () => {
        const tree = create(<TagsList tags={[`css`, `html`, `go`]} />)
            .toJSON();

        expect(tree).toMatchSnapshot();

    });
});