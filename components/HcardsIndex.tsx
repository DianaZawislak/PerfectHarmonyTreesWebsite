import React from 'react';
import HorizontalCard from './HorizontalCard'
import HorizontalCardInverse from './HorizontalCardInverse';

const HcardsIndex: React.FC = () => {
  return (
    <div>
        <div id="firstCard">
      <HorizontalCard
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1108988124006203442/dianadetroit_forest_location_many_fresh_cut_logs_stacked__arbor_25fb79ab-ae7f-4e6b-aa47-cce9f8e4508f.png "
        header="ARBORIST SERVICE"
        text="Professional tree care and maintenance solutions to ensure the health, safety, and beauty of trees. Our skilled arborists are trained in the art and science of tree care, offering a range of services including tree pruning, tree removal, tree planting, tree health assessments, and emergency tree services. With our expertise and specialized equipment, we deliver efficient and effective solutions to address any tree-related needs. Trust our arborists to enhance the aesthetics and longevity of your trees while promoting environmental sustainability and safety."
      />
      </div>
      <HorizontalCardInverse
        
        header="GARDEN SERVICE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna."
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1111484630625964105/dianadetroit_large_backyard_location_arborists_at_work_natural__fee082c7-5506-4c59-81d3-1b97db6ac9be.png"
      />
      <HorizontalCard
        imageUrl="https://cdn.discordapp.com/attachments/1103865788944875622/1111488821352222740/dianadetroit_large_backyard_location_arborists_at_work_natural__f69bec8c-ece8-4478-afa7-213d71491edd.png"
        header="LANDSCAPING SERVICE"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus ac ligula facilisis mollis et at urna."
      />
    </div>
    
  );
};

export default HcardsIndex;
