export const FooterV2 = {
  name: "FooterV2",
  title: "website footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
        name: "Address",
        title: "Business Address",
        type: "object",
        fields: [
          {
            name: "StreetAddress",
            title: "Street Addresss",
            type: "string",
            validation: (Rule:any) => Rule.required(),
          },
    
    
    
          {
            name: "City",
            title: "City",
            type: "string",
            validation: (Rule:any) => Rule.required(),
          },
          {
            name: "State",
            title: "State",
            type: "string",
            validation: (Rule:any) => Rule.required(),
          },
          {
            name: "Zipcode",
            title: "Zipcode",
            type: "number",
            validation: (Rule:any) => Rule.required(),
          },
        
        
        
        
       
     
          // Add other fields if needed
       
        ],
    
      },
      
    {
        name: "CompanyName",
        title: "Business Name",
        type: "string",
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: "PhoneNumber",
        title: "Phone Number",
        type: "string",
        validation: (Rule: { required: () => { (): any; new(): any; custom: { (arg0: (number: string) => true | "Please enter a valid phone number"): any; new(): any; }; }; }) => Rule.required().custom((number: string) => {
          const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
          return pattern.test(number) ? true : 'Please enter a valid phone number'
        }),
      },
      
    {
        name: "backgroundImage",
        title: "Background Image",
        type: "image",
        options: {
          hotspot: true,
        },
  
   
      },
      {
        name: "Email",
        title: "Business Email",
        type: "string",
        validation: (Rule: { required: () => { (): any; new(): any; custom: { (arg0: (email: string) => true | "Please enter a valid email"): any; new(): any; }; }; }) => Rule.required().custom((email: string) => {
          const pattern = /^\S+@\S+\.\S+$/;
          return pattern.test(email) ? true : 'Please enter a valid email'
        }),
      },
      {
        name: 'logo',
        title: 'logo',
        type: 'image',
        options: { hotspot: true },
      },

  ],
  preview: {
    select: {
      title: "title",
    },
  },
};





