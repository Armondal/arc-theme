import { registerBlockType } from '@wordpress/blocks';

registerBlockType('arc/genericheading', {
    title: 'Generic Heading',
    edit: EditComponent,
    save: SaveComponent,
});

function EditComponent() {
    return (
        <> heello</>
    );
}

function SaveComponent() {
    return (
      <>hello</>
  );
}
