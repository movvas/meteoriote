int led = D0;
int ledState = 0;
int setPinMode(String args)
{
  unsigned int loc = 0;
  unsigned int  pin = 0;
  unsigned int  mode = 0;


  loc = args.indexOf(",");
  pin = args.substring(0,loc).toInt();

  mode = args.substring(loc+1).toInt();
  // Error check
  if(mode != 0 && mode != 1)
  {
    //invalid mode
    return 1;
  }
  if(pin > 16)
  {
    return 1;
  }
  if(mode == 0)
  {
    pinMode(pin,OUTPUT);
  }
  else
  {
    pinMode(pin,INPUT);
  }
  return 0;
}
int toggleLight(String args)
  {
    if(ledState == 1)
    {
        digitalWrite(led, LOW);
        ledState = 0;
    } else {
        digitalWrite(led, HIGH);
        ledState = 1;
    }
  return ledState;
  }

void setup() {
  pinMode(led, OUTPUT);
  Spark.variable("lights", &ledState, INT);
  Spark.function("toggleLight", toggleLight);
    Spark.function("setPinMode", setPinMode);

}

void loop() {
    if(ledState==TRUE)
    {
     digitalWrite(led, HIGH);

    }
    else
    {
    digitalWrite(led, LOW);
    }
    delay(1000);
}
