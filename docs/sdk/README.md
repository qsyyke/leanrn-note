# 自动提取摘要

```java
import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;

import com.tencentcloudapi.nlp.v20190408.NlpClient;
import com.tencentcloudapi.nlp.v20190408.models.*;;

public class AutoSummarization
{
    public static void main(String [] args) {
        try{

            Credential cred = new Credential("SecretId", "SecretKey");

            HttpProfile httpProfile = new HttpProfile();
            httpProfile.setEndpoint("nlp.tencentcloudapi.com");

            ClientProfile clientProfile = new ClientProfile();
            clientProfile.setHttpProfile(httpProfile);

            NlpClient client = new NlpClient(cred, "ap-guangzhou", clientProfile);

            AutoSummarizationRequest req = new AutoSummarizationRequest();
            req.setText("sdfs");
            req.setLength(2343L);

            AutoSummarizationResponse resp = client.AutoSummarization(req);

            System.out.println(AutoSummarizationResponse.toJsonString(resp));
        } catch (TencentCloudSDKException e) {
            System.out.println(e.toString());
        }

    }

}
```





# 关键词

```java
@Test
public void test5() throws Exception {
    NlpClient client = GetNlpCliUtil.getClient();
    KeywordsExtractionRequest req = new KeywordsExtractionRequest();
    req.setText("jQuery使用animate创建动画教程");
    req.setNum(10L);

    KeywordsExtractionResponse resp = client.KeywordsExtraction(req);

    System.out.println(KeywordsExtractionResponse.toJsonString(resp));
}
```

