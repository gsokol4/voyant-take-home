export default function validateObject(object) {
  for (const [key, value] of Object.entries(object)) {
    if (typeof value !== "string") {
      throw new Error(
        `the type of ${key} was expected to be a string but it was a ${typeof value}`
      );
    }
  }
  /*
        I considered adding some form of dom purification here to validate inputs from this function>
        This helps prevent XSS attacks
        It is not really needed here since every thing is on the front end and they are only
        modifying local files, since we don't have a true database just a static js file on a server. 
        As for what I would have used I would have likely use domPurify or added another dependency to 
        take care of this rather then write custom code if this were connected to a server.

        note:
        the reason I pulled this into its own module is because I wanted this to update as the app updated
        and for it not be tied to a generic class when this can get very specific depending on the object used
        */
}
