package pl.larp.larpex.gsrvc.interaction.adapter.qr;

import java.util.Base64;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class QRBeanConfig {

  @Bean
  public Base64.Decoder base64Decoder() {
    return Base64.getDecoder();
  }
}
