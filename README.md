New Order

Se trata de un boton que genera un nuevo número de orden de manera secuencial.

Surgió la idea para resolver un problema que ocurría en mi lugar de trabajo, donde por cada venta nueva se generaba un numero de orden que se tomaba de manera manual desde una lista excel. Esto traia muchos inconvenientes ya que en ocaciones se olvidaban de marcar los numeros tomados y se solian repetir las ordenes. Ademas de esto se lleva una secuencia de centenas, donde, al coemnzar un nuevo mes las ordenens comienzan desde la siguiente centena.

Mi solución fué crear un boton que genera dicho número de orden el cual se suma de uno en uno tomando como referencia el ultimo numero almacenado en una base JSON y que ademas con ayuda de la dependencia de node-cron podemos programarla para que salte automaticamente a la siguiente centena cuando sea inicio de mes.