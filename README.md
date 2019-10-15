# LabKit

## Intentions

LabKit is a component library: a set of reusable components that complement each other.

## Rules

These rules are general guidelines, not concrete. If in the future we decide that they're not a good idea we shouldn't be afraid of breaking or changing them.

* There should be no global CSS helper classes, only SASS variables.

A component belongs in LabKit when:

* It does not contain any application specific code.

    * For example, it should not call an API route and then insert the data into the store.

* It does not rely on any state or data beyond props that can be passed in to the component.

    * It should not access the store directly.

* It is generic.

## TODO

* How to add a new component
    * Setting up a page with examples.
    * Setting up the router.
