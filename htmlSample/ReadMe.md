The goal is to have a toolset able to create and manage simple multi parts animated characters in html/js.

For now it's using canevas element but I'll try to make it work in full html/css. (Just because I don't like caneva)


How it's supposed to work ?

    - All the characters are independant javascript objects, this object define name, size, position etc... Will be external json soon.
    - In this object is defined all the parts that can compose this characters in the parts sub object, all parts have a name, target an image and have various seetings. If a part is using a sprite sheet, you need to add a sub-sub object defining it, it will be used for render properly the frame, and called and edit during the animation loops.
    - The partToDisplay array all the elements that are actually displayed, all the element out this array are ignored during the refresh loop, the order of this array is important depending of the stack.
    - The animation object list all the defined animation, all animation can be called with an init function then a run loop.
    - The redraw function is used to math all the animation then display the characters.


This is still a Work in progress from a javascript aprendice with probably a lot of mistakes.


Next goals :
    
    - Use only html/css for display characters without using any canevas.
    - Standarize then externalises in an independant objet all the animations loops and functions to be usable by multiple characters.
    - Import and create characters from json.
    - Make it easy to import and use in my html games.