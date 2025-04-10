# Install Prometheus Helm chart
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --create-namespace \
  --set prometheus.prometheusSpec.remoteWrite[0].url="https://aps-workspaces.us-east-1.amazonaws.com/workspaces/ws-713f8648-9a8f-4569-bdd8-54558c3be426/api/v1/remote_write" \
  --set prometheus.prometheusSpec.remoteWrite[0].queueConfig.maxSamplesPerSend=1000 \
  --set prometheus.prometheusSpec.remoteWrite[0].queueConfig.capacity=2500

  
# - name: Uninstall existing Prometheus
#   run: |
#     helm uninstall prometheus --namespace monitoring
#     # Optional: Delete the namespace if you want a completely clean slate
#     kubectl delete namespace monitoring --ignore-not-found=true