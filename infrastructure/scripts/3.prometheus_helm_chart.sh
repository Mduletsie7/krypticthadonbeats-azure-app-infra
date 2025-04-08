# Install Prometheus Helm chart
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace \
  --set prometheus.prometheusSpec.remoteWrite[0].url="https://aps-workspaces.us-east-1.amazonaws.com/workspaces/ws-c29b4e30-97ce-4c6c-8b04-344737491b9a/api/v1/remote_write" \
  --set prometheus.prometheusSpec.remoteWrite[0].queueConfig.maxSamplesPerSend=1000 \
  --set prometheus.prometheusSpec.remoteWrite[0].queueConfig.capacity=2500