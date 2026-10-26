---
_schema: landing-page-form
title: Request an Appointment
parentLandingPage: new-patient-special
landingPageSections:
  - _component: landing-page-components/shared/landing-page-form
    fontHeadings: ""
    fontBody: ""
    id: lp-appointment-form
    heading: Request an Appointment
    formAction: https://tnt-adder.herokuapp.com/submit/e151df78-2e67-497f-98c7-cbf51ceda2a0
    formBlocks:
      - _component: building-blocks/forms/input
        label: Name
        name: Name
        type: text
        placeholder: Name
        required: true
      - _component: building-blocks/forms/input
        label: Phone Number
        name: Phone
        type: text
        placeholder: Phone
        required: true
      - _component: building-blocks/forms/input
        label: Email Address
        name: email
        type: email
        placeholder: Email
        required: true
      - _component: building-blocks/forms/select
        label: Are you a new or existing patient?
        name: Patient
        placeholder: Are You A New Or Existing Patient?
        options:
          - value: New Patient
            label: New Patient
          - value: Existing Patient
            label: Existing Patient
      - _component: building-blocks/forms/select
        label: How did you hear about us?
        name: Discover
        placeholder: How Did You Hear About Us?
        options:
          - value: search engine
            label: Search Engine
          - value: family
            label: Family/Friend
          - value: promotion
            label: Promotion
          - value: social media
            label: Social Media
          - value: other
            label: Other
      - _component: building-blocks/forms/textarea
        label: Comments
        name: CommentArea
        placeholder: Comments
      - _component: building-blocks/forms/hidden
        name: _subject
        value: PPC New Patient Request an Appointment
      - _component: building-blocks/forms/hidden
        name: _redirect
        value: https://ads.tedudney.com/landing/thanks/
      - _component: building-blocks/forms/submit
        text: Send
        variant: secondary
    backgroundColor: base
    backgroundGradient: ""
    backgroundImage:
      source: null
      alt: null
      positionVertical: top
      positionHorizontal: center
head_scripts: []
footer_scripts: []
extraFonts: []
---
